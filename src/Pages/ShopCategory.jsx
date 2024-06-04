import React, { useContext, useEffect, useState } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '/dropdown_icon.png';
import Item from '../components/Item/Item';
import { Link } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { url } = useContext(ShopContext);
  const [allproducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = allproducts
    .filter(item => item.category === props.category)
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 to {filteredProducts.length}</span> out of {allproducts.length} Products</p>
        <div className="shopcategory-sort">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
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
