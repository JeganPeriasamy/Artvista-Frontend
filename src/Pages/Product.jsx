import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { url } = useContext(ShopContext);
  const [allproducts, setAllProducts] = useState([]);
  const { productId } = useParams(); // Correctly destructure productId
  
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(`${url}/allproducts`);
        const data = await response.json();
        setAllProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchInfo();
  }, [url]); // Include url as a dependency to re-fetch if url changes

  // Log products to debug
  useEffect(() => {
    console.log(allproducts);
  }, [allproducts]);

  // Find the product based on the productId from useParams
  const product = allproducts.find((e) => e._id === productId);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
