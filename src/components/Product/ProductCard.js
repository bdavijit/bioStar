import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const { name, image, _id, description, price, quantity, minimumOrder } =
          props.Product;
            const navigate = useNavigate();
        

         const handelBuyNow =()=>{
                  navigate('/product/' + _id);
                  window.scrollTo(0, 0);
         }
    return (
        <div>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button className='btn btn-primary' onClick={handelBuyNow}>buy Now</button>
        </div>
    );
};

export default ProductCard;