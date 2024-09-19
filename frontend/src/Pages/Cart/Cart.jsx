import './Cart.css';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Button, Box } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Divider from '@mui/material/Divider';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Components/Context/StoreContext';

const Cart = () => {
  const { cartItems, product_list, removeFromCart, getTotalCartAmount, addToCart, url } = useContext(StoreContext);

  const navigate = useNavigate();

  // Function to check if the cart is empty
  const isCartEmpty = () => {
    for (let itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        return false;
      }
    }
    return true;
  };

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 500.00;

  return (
    <>
      <Box sx={{ mt: 5, mb: 8, ml: 8, mr: 8 }}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>YOUR CART</Typography>
        {isCartEmpty() ? (
          <Typography variant="h6" color="textSecondary">
            Your cart is empty.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {/* Cart items section */}
            <Grid item xs={12} md={8} style={{ marginTop: '10px' }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><Typography variant="h6">Items</Typography></TableCell>
                      <TableCell><Typography variant="h6">Title</Typography></TableCell>
                      <TableCell><Typography variant="h6">Price</Typography></TableCell>
                      <TableCell><Typography variant="h6">Qty</Typography></TableCell>
                      <TableCell><Typography variant="h6">Total</Typography></TableCell>
                      <TableCell><Typography variant="h6"></Typography></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TransitionGroup component={null}>
                      {product_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                          return (
                            <CSSTransition key={item._id} timeout={500} classNames="fade">
                              <TableRow>
                                <TableCell>
                                  <img src={url+"/images/"+item.image} alt={item.name} width="100" />
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>Rs.{item.price}</TableCell>
                                <TableCell>
                                  <Box display="flex" alignItems="center" border={1} borderColor="#e0e0e0" padding={0.8} width={110}>
                                    <Typography variant="body1" style={{ margin: '0 10px' }}>{cartItems[item._id]}</Typography>

                                    <IconButton
                                      onClick={() => removeFromCart(item._id)}
                                      sx={{ backgroundColor: '#eceff1' }}
                                      size="small" 
                                    >
                                      <RemoveIcon sx={{fontSize:'18px'}} />
                                    </IconButton>

                                    <IconButton onClick={() => addToCart(item._id)}  sx={{backgroundColor: '#eceff1' , marginLeft:'5px'}} size="small">
                                      <AddIcon sx={{fontSize:'18px'}} />
                                    </IconButton>
                                  </Box>
                                </TableCell>
                                <TableCell>Rs.{(item.price * cartItems[item._id]).toFixed(2)}</TableCell>
                                <TableCell>
                                  <IconButton onClick={() => removeFromCart(item._id)} color="secondary" style={{ color: 'red' }}>
                                    <DeleteIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            </CSSTransition>
                          );
                        }
                        return null;
                      })}
                    </TransitionGroup>
                  </TableBody>
                </Table>
              </TableContainer>
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
                <Button onClick={() => navigate('/place_order')} variant="contained" color="primary" fullWidth style={{ backgroundColor: '#7c4dff', marginTop: '50px' }}>
                  Checkout
                </Button>
                <Button onClick={() => navigate('/')} variant="outlined" fullWidth style={{ marginTop: '10px', borderColor: '#7c4dff', color: '#7c4dff' }}>
                  CONTINUE SHOPPING
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
      <br />
      <br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Cart;
