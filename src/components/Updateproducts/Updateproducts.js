import React from 'react';
import { useParams } from 'react-router-dom';
import useFindAdmin from '../../hook/usefindAdmin';
import useFindProduct from '../../hook/useFindProduct';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import './Updateproducts.css'

const Updateproducts = () => {
      const { pid } = useParams();
      const [OneProduct, setOneProduct] = useFindProduct(pid);
      const { user } = useFirebase();

      const [myUsers, setmyUsers] = useFindAdmin(user?.email);

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
            <div>
                  {user && myUsers?.role ? (
                        <section className='UpdateProductBox'>
                              <div>
                                    <img src={OneProduct?.image} alt='' />
                                    <h1 className='text-center text-2xl my-text-color'>
                                          {OneProduct?.name}
                                    </h1>
                                    <p className='text-center '>
                                          Price :{OneProduct?.price}
                                    </p>
                                    <p className='text-center'>
                                          quantity: {OneProduct?.quantity}
                                    </p>
                                    <p className='text-center mb-5'>
                                          sold: {OneProduct?.sold}
                                    </p>
                              </div>
                              <form
                                    onSubmit={UpdateProduct}
                                    className='flex flex-col items-center'
                              >
                                    <input
                                          type='number'
                                          placeholder='Price'
                                          class='input m-3 input-bordered input-error w-full max-w-xs'
                                          name='price'
                                          required
                                    />
                                    <br></br>
                                    <input
                                          type='number'
                                          placeholder='Quantity'
                                          class='input m-3 input-bordered input-error w-full max-w-xs'
                                          name='quantity'
                                          required
                                    />
                                    <br></br>
                                    <input
                                          type='number'
                                          placeholder='Sold'
                                          class='input m-3 input-bordered input-error w-full max-w-xs'
                                          name='sold'
                                          required
                                    />
                                    <br></br>
                                    <button
                                          type='submit flex content-center'
                                          className='btn'
                                    >
                                          Update
                                    </button>
                              </form>
                        </section>
                  ) : (
                        <>
                              {myUsers?.role === undefined ? (
                                    <>
                                          <h1 className='text-center'>
                                                Please login as a Admin
                                          </h1>
                                          <Login2 />
                                    </>
                              ) : (
                                    <h1>test</h1>
                              )}
                        </>
                  )}
            </div>
      );
};

export default Updateproducts;
