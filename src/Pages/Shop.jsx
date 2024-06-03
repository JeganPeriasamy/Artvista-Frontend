import React,{useEffect,useState,useContext}from 'react'
import Hero from "../components/Hero/Hero"
import Popular from '../components/Popular/Popular'
import Offers from "../components/Offers/Offers"
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newsletter/Newsletter'
import {ShopContext} from "../Context/ShopContext"

const Shop = () => {
  const { url } = useContext(ShopContext);
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch(`${url}/popularinsearch`) 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
            console.log(popular)
    fetch(`${url}/newcollections`) 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
            console.log(newcollection)
    }

    useEffect(() => {
      fetchInfo();
    }, [])



  return (
    <div>
      <Hero/>
      <Popular data={popular}/>
      <Offers/>
      <NewCollections data={newcollection}/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop
