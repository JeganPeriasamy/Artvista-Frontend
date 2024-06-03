import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from "/star_icon.png";
import star_dull_icon from "/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const { productId } = useParams(); 
    if (!product) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.images && product.images.map((img, index) => (
                        <img key={index} src={img} alt={`Product ${index}`} />
                    ))}
                </div>

                <div className="productdisplay-image">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className='productdisplay-right-stars'>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={star_icon} alt="Star" />
                    ))}
                    <img src={star_dull_icon} alt="Dull Star" />
                    <p>(122)</p>
                </div>

                <div className='productdisplay-right-prices'>
                    <div className="productdisplay-right-price-new">
                        ${product.price}
                    </div>
                </div>

                <div className="productdisplay-right-description">
                    <b>Artist :</b> Sign by the artist with Name on the back of the canvas by default, sign on the front at the lower right corner when the customer requires.
                </div>

                <div className="productdisplay-right-size">
                    <h1>Size : Only 16*32 is Available for all </h1>
                    <div className="productdisplay-right-sizes">
                        {product.sizes && product.sizes.map((size, index) => (
                            <div key={index}>{size}</div>
                        ))}
                    </div>
                </div>

                <button onClick={() => { addToCart(productId) }}>ADD CART</button>
                <p className='productdisplay-right-category'>
                    <span>Tags:</span> {product.tags && product.tags.join(', ')}
                </p>
            </div>
        </div>
    );
}

export default ProductDisplay;
