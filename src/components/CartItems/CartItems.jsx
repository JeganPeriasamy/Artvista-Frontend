import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import cross_icon from "/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { addToCart, products, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Add</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((item) => {
        const quantity = cartItems[item._id] || 0;
        if (quantity > 0) {
          return (
            <div key={item._id}>
              <div className='cartitems-format-main'>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>
                <p className='add' onClick={() => addToCart(item._id)}>add</p>
                <p className='cross' onClick={() => removeFromCart(item._id)}>decrease</p>
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If You have promo code, Enter it here</p>
          <div className='cartitems-promobox'>
            <input type="text" placeholder='Enter Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
