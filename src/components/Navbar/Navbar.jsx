import React, { useContext, useState,useRef } from 'react'
import"./Navbar.css"
import logo from "/logo.png"
import cart_icon from  "/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from "/nav_dropdown.png"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
// State for menu
const [menu,setMenu] = useState("shop")
const {getTotalCartItems} = useContext(ShopContext)
// For creating the icon when reduce in size
const menuRef = useRef();


const dropdown_toggle = (e) =>{

  menuRef.current.classList.toggle("nav-menu-visible")
  e.target.classList.toggle("open")
}
const handleClick = () => {
  navigate('/');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

  return (
    <div className='nav'>
        
        <div className="nav-logo">
            <img src={logo}  onClick={handleClick}alt=""></img>
        </div>

        <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Dropdown" />
        <ul ref={menuRef}className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}}to="/">Overview</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("abstract")}}><Link style={{textDecoration:"none"}}to="/abstract">Abstract Painting</Link>{menu==="abstract"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mini")}}><Link style={{textDecoration:"none"}} to="/mini">3D minimalist Art</Link>{menu==="mini"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("new")}}><Link  style={{textDecoration:"none"}}to="/new">New In</Link>{menu==="new"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
          {localStorage.getItem("auth-token")?
          <button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/')}}>Logout</button>
        :<Link to="/login"><button>Login</button></Link>}            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          
        </div>
        <div className="nav-login-cart">
          {localStorage.getItem("auth-token")?
          <button onClick={()=>{localStorage.getItem("auth-token");window.location.replace('/myorders')}}>MyOrders</button>
        :<></>}
          
        </div>
      
    </div>
  )
}

export default Navbar
