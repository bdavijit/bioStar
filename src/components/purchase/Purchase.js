import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import "./Purchase.css"

const Purchase = () => {
      const { pId } = useParams();
      const { user } = useFirebase();

      const [OneProduct, setOneProduct] = useState();
      const [MinimumOrder, setMinimumOrder] = useState(0);
      useEffect(() => {
            fetch(`http://localhost:5001/products/${pId}`)
                  .then((res) => res.json())
                  .then((data) => {
                        setOneProduct(data);
                        setMinimumOrder(data?.minimumOrder);
                  });
      }, []);

      const placeOrder = (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const mobile = event.target.mobile.value;
            const Address = event.target.Address.value;
            const paid = false;
            const quantity = MinimumOrder;

            const Order = {
                  name,
                  email,
                  mobile,
                  Address,
                  pId,
                  paid,
                  quintity: quantity,
                  pName: OneProduct?.name,
                  pImage: OneProduct?.image,
                  pPrice: OneProduct?.price,
            };

            fetch('http://localhost:5001/Order', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(Order),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        alert('Product added successfully!!!');
                        event.target.reset();
                  });
      };

      const handelQuantity = (btnName) => {
            if (MinimumOrder === 0) {
                  setMinimumOrder(parseInt(OneProduct?.minimumOrder));
            } else if (btnName === 'plus') {
                  if (OneProduct?.quantity > MinimumOrder) {
                        setMinimumOrder(parseInt(parseInt(MinimumOrder) + 1));
                  } else {
                        toast('Stock Out');
                  }
            } else {
                  if (
                        MinimumOrder > 0 &&
                        OneProduct.minimumOrder < MinimumOrder
                  ) {
                        setMinimumOrder(parseInt(parseInt(MinimumOrder) - 1));
                  } else {
                        toast(
                              `MinimumOrder must be getter then ${OneProduct.minimumOrder}`
                        );
                  }
            }
            console.log(
                  OneProduct?.minimumOrder,
                  MinimumOrder,
                  OneProduct?.quantity
            );
      };

      return (
            <div>
                  {user ? (
                        <>
                              <ToastContainer />
                              <div className='PurchaseCard'>
                                    <img src={OneProduct?.image} alt='' />
                                    <div className='text-center'>
                                          {' '}
                                          <p>{OneProduct?.name}</p>
                                          <p>{OneProduct?.description}</p>
                                          <p>{OneProduct?.price}</p>
                                          <p>{OneProduct?.quantity}</p>
                                    </div>
                              </div>
                              <br></br>
                              <div className='PurchasebtnBox'>
                                    <button
                                          className='btn'
                                          onClick={() =>
                                                handelQuantity('minus')
                                          }
                                    >
                                          -
                                    </button>
                                    <p>{MinimumOrder}</p>
                                    <button
                                          className='btn'
                                          onClick={() => handelQuantity('plus')}
                                    >
                                          +
                                    </button>
                              </div>
                              <form onSubmit={placeOrder}>
                                    <div className='PurchaseBox'>
                                          <input
                                                type='text'
                                                placeholder='name'
                                                class='input input-bordered input-error w-full max-w-xs'
                                                value={user?.displayName}
                                                name='name'
                                          />
                                          <input
                                                type='text'
                                                placeholder='email'
                                                class='input input-bordered input-error w-full max-w-xs'
                                                value={user?.email}
                                                name='email'
                                          />
                                          <input
                                                type='number'
                                                placeholder='phone number'
                                                name='mobile'
                                                class='input input-bordered input-error w-full max-w-xs'
                                          />
                                          <textarea
                                                class='textarea textarea-error'
                                                placeholder='Address'
                                                name='Address'
                                          ></textarea>
                                          <br></br>

                                          <button
                                                className='btn '
                                                type='submit'
                                          >
                                                place order
                                          </button>
                                    </div>
                              </form>
                        </>
                  ) : (
                        <Login2 />
                  )}
            </div>
      );
};

export default Purchase;
