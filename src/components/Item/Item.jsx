import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  console.log(props)
  const { id, image, name, price } = props;
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='item'>
      <Link to={`/product/${id}`} onClick={handleClick}>
        <img src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          ${price}
        </div>
      </div>
    </div>
  );
};

export default Item;
