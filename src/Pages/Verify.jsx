import React, { useContext, useEffect } from 'react';
import './CSS/Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(ShopContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url+"/verify", { success, orderId });
      if (response.data.success) {
        navigate('/myorders');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      navigate('/');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [success, orderId, url]);

  return (
    <div className='verify'>
      <div className="spinner">
               <div className="loader">
                Wait 
               </div>
      </div>
    </div>
  );
};

export default Verify;
