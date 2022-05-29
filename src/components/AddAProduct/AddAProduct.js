import React from 'react';
import useFirebase from '../../hook/useFirebase';
import './AddAProduct.css';

const AddAProduct = () => {
      const { user } = useFirebase();
      const AddProduct = (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const image = event.target.image.value;
            const minimumOrder = event.target.minimumOrder.value;
            const price = parseInt(event.target.price.value);
            const quantity = parseInt(event.target.quantity.value);
            const sold = parseInt(event.target.sold.value);
            const UserEmail = event.target.UserEmail.value;
            const description = event.target.description.value;

            const ProductDate = {
                  name,
                  image,
                  minimumOrder,
                  price,
                  quantity,
                  sold,
                  UserEmail,
                  description,
            };

            fetch('https://mysterious-brook-63688.herokuapp.com/Product', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(ProductDate),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        alert('Product added successfully!!!');
                        event.target.reset();
                  });
      };
      return (
            <section>
                  <form onSubmit={AddProduct}>
                        <div className='AddProductCSS'>
                              <input
                                    type='text'
                                    placeholder='name'
                                    class='input m-3 input-bordered input-error w-full max-w-xs'
                                    name='name'
                                    required
                              />
                              <input
                                    type='text'
                                    placeholder='image'
                                    class='input m-3 input-bordered input-error w-full max-w-xs'
                                    name='image'
                                    required
                              />
                              <input
                                    type='number'
                                    placeholder='minimumOrder'
                                    class='input m-3 input-bordered input-error w-full max-w-xs'
                                    name='minimumOrder'
                                    required
                              />
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
                              <input
                                    type='text'
                                    placeholder='UserEmail'
                                    value={user.email}
                                    class='input m-3 input-bordered input-error w-full max-w-xs'
                                    name='UserEmail'
                                    required
                              />
                              <textarea
                                    class='textarea  m-3 textarea-error'
                                    placeholder='description'
                                    name='description'
                                    required
                              ></textarea>
                              <br></br>

                              <button className='btn m-3' type='submit'>
                                    Add Product
                              </button>
                        </div>
                  </form>
            </section>
      );
};

export default AddAProduct;
