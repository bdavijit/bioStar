import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const ProductCard = (props) => {
    const { name, image, _id, description, price, quantity, minimumOrder } =
          props.Product;
            const navigate = useNavigate();
        

         const handelBuyNow =()=>{
                  navigate('/products/' + _id);
                  window.scrollTo(0, 0);
         }
    return (
        <div className='ProductCard'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button className='btn ' onClick={handelBuyNow}>buy Now</button>
        </div>
    );
};

export default ProductCard;