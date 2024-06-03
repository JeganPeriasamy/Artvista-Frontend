import React, { useContext, useEffect, useState } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '/dropdown_icon.png';
import Item from '../components/Item/Item';
import { Link } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { url } = useContext(ShopContext);
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch(`${url}/allproducts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data.data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleExploreMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will scroll smoothly to the top
    });
  };

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 to 12</span> out of 54 Products</p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {allproducts.length > 0 ? (
          allproducts
            .filter(item => item.category === props.category)
            .map((item, i) => (
              <Item 
                id={item._id}
                key={i}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className="shopcategory-loadmore">
        <Link to='/' onClick={handleExploreMoreClick} style={{ textDecoration: 'none' }}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
