// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import TextRunner from './Components/TextRunner/TextRunner';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Error from './Pages/404/404';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Preloader from './Components/preloader/Preloader';
import Product from './Pages/Product/Product';


// Import new dashboard components
import DashboardLayout from './Components/Dashboard/DashboardLayout';




import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';



import AccountSettings from './Pages/Dashboard/AccountSettings/AccountSettings';
import Verify from './Pages/Verify/Verify';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Show Preloader while loading is true
      ) : (
        <>
          {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
          <div className='app'>
            <Router>
              <TextRunner />
              <Navbar setShowLogin={setShowLogin} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/place_order' element={<PlaceOrder />} />
              <Route path='/verify' element= {<Verify/>}/>
                
                {/* New dashboard routes */}
                <Route path='/dashboard' element={<DashboardLayout />}>
                  <Route index element={<MyOrders/>} />
             
             
                  <Route path='settings' element={<AccountSettings/>} />
                </Route>

                <Route path='*' element={<Error />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </>
      )}
    </>
  );
};

export default App;