import React from 'react';
import { useParams } from 'react-router-dom';
import useFindProduct from '../../hook/useFindProduct';

const Updateproducts = () => {
      const { pid } = useParams();
      const [OneProduct, setOneProduct] = useFindProduct(pid);
      const Product = {
            name: OneProduct?.name,
            image: OneProduct?.image,
            minimumOrder: OneProduct?.minimumOrder,
            UserEmail: OneProduct?.UserEmail,
            description: OneProduct?.description,
            price: OneProduct?.price,
            quantity: OneProduct?.quantity,
            sold: OneProduct?.sold,
      };
     console.log(Product);
      const UpdateProduct = (event) => {
            event.preventDefault();
            Product.price = event.target.price.value;
            Product.quantity = event.target.quantity.value;
            Product.sold = event.target.sold.value;
            // Product.UserEmail = OneProduct?.UserEmail;
            // Product.description = OneProduct?.description;
            

            console.log(Product);
          
           const url = `http://localhost:5001/Product/${pid}`;
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
            });

      };

      return (
            <section>
                  <h1>{OneProduct?.name}</h1>
                  <img src={OneProduct?.image} alt='' />
                  <p>Price :{Product?.price}</p>
                  <p>quantity: {Product?.quantity}</p>
                  <p>sold: {Product?.sold}</p>
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
                  <button
                        onClick={() => window.location.reload()}
                        className='btn'
                  >
                        Refresh
                  </button>
            </section>
      );
};

export default Updateproducts;
