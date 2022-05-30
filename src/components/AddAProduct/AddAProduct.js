import React from 'react';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import Loading from '../Loading/Loading';
import Login2 from '../Login/Login';
import './AddAProduct.css';

const AddAProduct = () => {
      const { user } = useFirebase();

      const [myUsers, setmyUsers] = useFindAdmin(user?.email);
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
            <div>
                  {user && myUsers?.role ? (
                        <section>
                              <form onSubmit={AddProduct}>
                                    <div className='AddProductCSS'>
                                          <input
                                                type='text'
                                                placeholder='name'
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='name'
                                                required
                                          />
                                          <input
                                                type='text'
                                                placeholder='image'
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='image'
                                                required
                                          />
                                          <input
                                                type='number'
                                                placeholder='minimumOrder'
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='minimumOrder'
                                                required
                                          />
                                          <input
                                                type='number'
                                                placeholder='price'
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='price'
                                                required
                                          />
                                          <input
                                                type='number'
                                                placeholder='quantity'
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='quantity'
                                                required
                                          />
                                          <input
                                                type='number'
                                                placeholder='sold'
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='sold'
                                                required
                                          />
                                          <input
                                                type='text'
                                                placeholder='UserEmail'
                                                value={user.email}
                                                className='input m-3 input-bordered input-error w-full max-w-xs'
                                                name='UserEmail'
                                                required
                                          />
                                          <textarea
                                                className='textarea  m-3 textarea-error'
                                                placeholder='description'
                                                name='description'
                                                required
                                          ></textarea>
                                          <br></br>

                                          <button
                                                className='btn m-3'
                                                type='submit'
                                          >
                                                Add Product
                                          </button>
                                    </div>
                              </form>
                        </section>
                  ) : (
                        <>
                              {!myUsers?.role === undefined ? (
                                    <>
                                          <h1 className='text-center'>
                                                Please login as a Admin
                                          </h1>
                                          <Login2 />
                                    </>
                              ) : (
                                    <Loading />
                              )}
                        </>
                  )}
            </div>
      );
};

export default AddAProduct;
