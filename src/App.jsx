import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Product from './Pages/Product'; // Assuming you have a Product component
import Cart from './Pages/Cart'; // Assuming you have a Cart component
import abstract_banner from '/banner_mens.png'
import PlaceOrder from './Pages/PlaceOrder';
import Verify from './Pages/Verify';
import Myorders from './Pages/Myorders';
import AboutUs from './components/Aboutus/Aboutus';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/abstract" element={<ShopCategory banner={abstract_banner}category="abstract" />} />
                    <Route path="/mini" element={<ShopCategory banner={abstract_banner}category="mini" />} />
                    <Route path="/new" element={<ShopCategory banner={abstract_banner}category="new" />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginSignup />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    <Route path="/verify" element={<Verify/>}/>
                    <Route path="/myorders" element={<Myorders/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
