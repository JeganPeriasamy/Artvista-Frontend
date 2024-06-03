import React from 'react'
import {useState,useEffect,useContext} from 'react'
import "./RelatedProducts.css"
import Item from "../Item/Item"
import {ShopContext} from "../../Context/ShopContext"
const RelatedProducts = () => {
  const { url } = useContext(ShopContext);
  const [related, setRelated ] = useState([]);

  const fetchInfo = () => { 
    fetch(`${url}/relatedproducts`) 
            .then((res) => res.json()) 
            .then((data) => setRelated(data))
            console.log(related)
    }
    useEffect(() => {
      fetchInfo();
    }, [])




  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
      {related.map((item,i)=>{
         return(
            <Item 
            key={i} 
            id={item._id} 
            name={item.name} 
            image={item.image}
            price={item.price}
           
            
            />
       )
      })}
      </div>
    </div>
  )
}

export default RelatedProducts
