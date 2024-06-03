import React, { useContext,useEffect,useState } from 'react'
import "./CSS/Myorders.css"
import {ShopContext} from "../Context/ShopContext"
import axios from "axios"



const Myorders = () => {

    const{url,token} = useContext(ShopContext)
    const [data,setData] = useState([]);

    
    const fetchOrders = async () =>
        {
        const response = await axios.post(url+"/userorders",{},{headers:{token}});
        setData(response.data.data);
    }

    // Whenever token gets updated it executed
    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index}className="my-orders-order">
                    <img src={"https://images.pond5.com/scooter-parcel-delivery-icon-cartoon-illustration-233258079_iconl_nowm.jpeg"} alt=""></img>
                    <p>{order.items.map((item,index)=>{
                            if(index=== order.items.length-1){
                                return item.name+" X "+item.quantity
                            }
                            else{
                                return item.name+" X "+item.quantity+ ", "
                            }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>Items:{order.items.length}</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button onClick={fetchOrders}>Track Order</button>

                </div>
                )
               
            })}
        </div>
      
    </div>
  )
}

export default Myorders
