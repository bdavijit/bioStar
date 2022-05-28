import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProductsCard = (props) => {
    const {_id , name, image , price} =props.product;

    
            const navigate = useNavigate();

            const handleupdate = () => {
                  navigate('/Updateproducts/' + _id);
                  window.scrollTo(0, 0);
            };
    return (
          <section>
                <img src={image} alt='' />
                <p>{name}</p>
                <p>{price}</p>
                <button className='btn' onClick={handleupdate}>
                      update
                </button>
          </section>
    );
};

export default ManageProductsCard;