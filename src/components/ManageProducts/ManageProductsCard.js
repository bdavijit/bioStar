import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProductsCard = (props) => {
    const {_id , name, image , price} =props.product;

    
            const navigate = useNavigate();

            const handleupdate = () => {
                  navigate('/Updateproducts/' + _id);
                  window.scrollTo(0, 0);
            };
             const DeleteProduct = (id) => {
                   const proceed = window.confirm(
                         'Are you sure you want to delete?'
                   );
                   if (proceed) {
                         const url = `https://mysterious-brook-63688.herokuapp.com/Product/${id}`;
                         fetch(url, {
                               method: 'DELETE',
                         })
                               .then((res) => res.json())
                               .then((data) => {
                                     if (data.deletedCount > 0) {
                                       props.setProductApicall(
                                             !props.ProductApi
                                       );
                                     }
                                     alert('ok');
                               });
                   }
             };
    return (
          <section className='ManageProductCard'>
                <img src={image} alt='' />
                <p className='text-center text-2xl'>{name}</p>
                <p className='text-center text-xl mb-2'>{price}</p>
                <button className='btn mt-2' onClick={handleupdate}>
                      update
                </button>
                <button
                      className='btn bg-red-600 mt-2'
                      onClick={() => DeleteProduct(_id)}
                >
                      Delete
                </button>
          </section>
    );
};

export default ManageProductsCard;