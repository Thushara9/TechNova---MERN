import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { product_list } from "../../assets/assets";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [ product_list,setProductList] = useState ([])


    const addToCart = async (itemId) => {
        const itemInfo = product_list.find((product) => product._id === itemId);

        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }

        // Trigger a toast notification with image on the left and text on the right
        toast.success(
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={url+"/images/"+itemInfo.image} alt={itemInfo.name} style={{ width: "50px", marginRight: "10px" }} />
                <div>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{itemInfo.name}</p>
                    <p style={{ margin: 0 }}>added to cart!</p>
                </div>
            </div>,
            {

                icon: false // Disable the default icon
            }
        );
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    
    if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})

    }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = product_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

const fetchProductList = async ()=> {
    const response =await axios.get(url+"/api/product/list")
    setProductList(response.data.data)
}


const loadCartData = async (token)=>{
       const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
     setCartItems(response.data.cartData);
}



    useEffect(() => {
      
        async function loadData() {
            await fetchProductList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                 await loadCartData(localStorage.getItem("token"));
    
            }
        }
        loadData();
    }, [])

    const contextValue = {
        product_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            <ToastContainer
                position="bottom-left"
                transition={Slide}

            />
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
