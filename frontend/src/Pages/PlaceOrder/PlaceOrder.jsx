import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { StoreContext } from '../../Components/Context/StoreContext';
import { useState } from 'react';
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, url, cartItems, product_list } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    product_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 500.00, // Format the amount with two decimal places
    };
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      toast.error("please login");
    }
  };

  const deliveryFee = getTotalCartAmount() === 0 ? 0.00 : 500.00;

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <form onSubmit={placeOrder} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              CHECKOUT
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h6" gutterBottom>
                Delivery Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name='firstName' onChange={onChangeHandler} value={data.firstName} label="First Name" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name='lastName' onChange={onChangeHandler} value={data.lastName} label="Last Name" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='address' onChange={onChangeHandler} value={data.address} label="Address" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name='city' onChange={onChangeHandler} value={data.city} label="City" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name='postalCode' onChange={onChangeHandler} value={data.postalCode} label="Postal Code" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='country' onChange={onChangeHandler} value={data.country} label="Country" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='phoneNumber' onChange={onChangeHandler} value={data.phoneNumber} label="Phone Number" fullWidth required />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Order summary section */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom>Order Summary</Typography>
              <Box display="flex" style={{ marginTop: '30px' }} justifyContent="space-between" mb={2}>
                <Typography>Subtotal:</Typography>
                <Typography>Rs.{getTotalCartAmount().toFixed(2)}</Typography>
              </Box>
              <Box display="flex" style={{ marginTop: '20px' }} justifyContent="space-between" mb={2}>
                <Typography>Delivery Fee:</Typography>
                <Typography>Rs.{deliveryFee.toFixed(2)}</Typography>
              </Box>
              <Divider component="" />
              <Box display="flex" style={{ marginTop: '20px' }} justifyContent="space-between" mb={2}>
                <Typography>Total:</Typography>
                <Typography>Rs.{(getTotalCartAmount() + deliveryFee).toFixed(2)}</Typography>
              </Box>
              <Button type='submit' variant="contained" color="primary" fullWidth style={{ backgroundColor: '#7c4dff', marginTop: '50px' }}>
                Submit
              </Button>
              <Button variant="outlined" fullWidth style={{ marginTop: '10px', borderColor: '#7c4dff', color: '#7c4dff' }}>
                CONTINUE SHOPPING
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PlaceOrder;
