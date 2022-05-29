import React from 'react';
import { useParams } from 'react-router-dom';
import useFindProduct from '../../hook/useFindProduct';

const Updateproducts = () => {
      const { pid } = useParams();
      const [OneProduct, setOneProduct] = useFindProduct(pid);

      const UpdateProduct = (event) => {
            event.preventDefault();
                  const Product = {
                        name: OneProduct?.name,
                        image: OneProduct?.image,
                        minimumOrder: OneProduct?.minimumOrder,
                        UserEmail: OneProduct?.UserEmail,
                        description: OneProduct?.description,
                        price: event.target.price.value,
                        quantity: event.target.quantity.value,
                        sold: event.target.sold.value,
                  };
            // Product.price = event.target.price.value;
            // Product.quantity = event.target.quantity.value;
            // Product.sold = event.target.sold.value;
            // Product.UserEmail = OneProduct?.UserEmail;
            // Product.description = OneProduct?.description;
            

            console.log(Product);
          
           const url = `https://mysterious-brook-63688.herokuapp.com/Product/${pid}`;
            fetch(url, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(Product),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        console.log('success', data);
                        alert(' Product update');
                        event.target.reset();
                        window.location.reload();
            });

      };

      return (
            <section>
                  <h1>{OneProduct?.name}</h1>
                  <img src={OneProduct?.image} alt='' />
                  <p>Price :{OneProduct?.price}</p>
                  <p>quantity: {OneProduct?.quantity}</p>
                  <p>sold: {OneProduct?.sold}</p>
                  <form onSubmit={UpdateProduct}>
                        <input
                              type='number'
                              placeholder='price'
                              class='input m-3 input-bordered input-error w-full max-w-xs'
                              name='price'
                              required
                        />
                        <input
                              type='number'
                              placeholder='quantity'
                              class='input m-3 input-bordered input-error w-full max-w-xs'
                              name='quantity'
                              required
                        />
                        <input
                              type='number'
                              placeholder='sold'
                              class='input m-3 input-bordered input-error w-full max-w-xs'
                              name='sold'
                              required
                        />
                        <button type='submit' className='btn'>
                              Update
                        </button>
                  </form>

            </section>
      );
};

export default Updateproducts;
