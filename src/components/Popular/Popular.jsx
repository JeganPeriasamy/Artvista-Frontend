import React,{useState,useEffect} from 'react'
import './Popular.css'
import Item from "../Item/Item"

const Popular = (props) => {
console.log(props)
  return (
    <div className='popular'>
    <h1>Popular in Search</h1>
    <hr/>
    <div className="popular-item">
        {props.data.map((item,i)=>{
            return(
             <Item 
             key={i} 
             id={item._id} 
             name={item.name} 
             image={item.image}
             price={item.price}
             
             />
        )})}
    </div>
    </div>
  )
}

export default Popular
