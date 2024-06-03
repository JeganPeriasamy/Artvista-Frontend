import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  
  const url = "https://artvista-backend-3ycc.onrender.com";   // Backend URL
  const [products, setProducts] = useState([]); // To display the data from the DataBase 
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  // To fetch - Working 
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${url}/allproducts`); // Corrected fetch URL
      const data = await response.json();
      setProducts(data.data);
      // Log the products after setting them
    } catch (error) {
      console.error('Error fetching products:', error); // Added error handling
    }
  };
  
  
// ADD TO CART FUNCTION  -  Working 
const addToCart = async (itemId) => {
  if (!cartItems[itemId]) {
    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  } else {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  if (token) {
    try {
      await axios.post(url + "/addtocart", { itemId }, { headers: { token } });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }
};


// REMOVE FROM CART FUNCTION - Working 
const removeFromCart = async (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  if (token) {
    try {
      await axios.post(url + "/removefromcart", { itemId }, { headers: { token } });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  }
};
// Get Total cart Amount  - Working 
const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = products.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
  }
  return totalAmount;
};

// If i click button and refresh the page - the quantity added should be displayed - Working 
const loadCartData = async () => {
  try {
    const response = await axios.post(url + "/getcart", {}, { headers: { token } });
    setCartItems(response.data.cartData);
  } catch (error) {
    console.error('Error loading cart data:', error);
  }
};

useEffect(() => {
  const loadData = async () => {
    await fetchProducts();
    if (localStorage.getItem("auth-token")) {
      setToken(localStorage.getItem("auth-token"));
      await loadCartData();
    }
  };
  loadData();
}, [token]); // Added token to the dependency array

  
  const contextValue = { token,setToken, url,getTotalCartAmount, products, setCartItems,cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
