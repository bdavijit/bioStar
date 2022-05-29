import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import "./Purchase.css";

const Purchase = () => {
      const { pId } = useParams();
      const { user } = useFirebase();
  

      const [myUsers, setmyUsers] = useFindAdmin(user?.email);
      const [OneProduct, setOneProduct] = useState();
      const [MinimumOrder, setMinimumOrder] = useState(0);
      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/products/${pId}`)
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
            const status = "unpaid";
            const quantity = MinimumOrder;

            const Order = {
                  name,
                  email,
                  mobile,
                  Address,
                  pId,
                  paid,
                  status,
                  quintity: quantity,
                  pName: OneProduct?.name,
                  pImage: OneProduct?.image,
                  pPrice: OneProduct?.price,
            };

            fetch('https://mysterious-brook-63688.herokuapp.com/Order', {
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
              console.log(
                    OneProduct?.minimumOrder,
                    MinimumOrder,
                    OneProduct?.quantity
              );
            if (MinimumOrder === 0) {
                  setMinimumOrder(parseInt(OneProduct?.minimumOrder));
            } else if (btnName === 'plus') {
                  if (OneProduct?.quantity > parseInt(MinimumOrder)) {
                        console.log();
                        setMinimumOrder(parseInt(parseInt(MinimumOrder) + 1));
                  } else {
                        toast('Stock Out');
                  }
            } else {
                  if (
                        MinimumOrder > 0 &&
                        OneProduct.minimumOrder < parseInt(MinimumOrder)
                  ) {
                        setMinimumOrder(parseInt(parseInt(MinimumOrder) - 1));
                  } else {
                        toast(
                              `MinimumOrder must be getter then ${OneProduct.minimumOrder}`
                        );
                  }
            }
 
      };

      return (
            <div>
                  {user && !myUsers?.role ?(
                        <div>
                              <ToastContainer />
                              <div className='PurchaseCard'>
                                    <img src={OneProduct?.image} alt='' />
                                    <div className='text-center'>
                                          {' '}
                                          <p className='text-2xl my-text-color'>
                                                {OneProduct?.name}
                                          </p>
                                          <p>{OneProduct?.description}</p>
                                          <p className='text-xl'>
                                                Price: {OneProduct?.price}
                                          </p>
                                          <p className='text-lg'>
                                                Quantity: {OneProduct?.quantity}
                                          </p>
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
                                                required
                                          />
                                          <input
                                                type='number'
                                                placeholder='phone number'
                                                name='mobile'
                                                class='input input-bordered input-error w-full max-w-xs'
                                                required
                                          />
                                          <textarea
                                                class='textarea textarea-error'
                                                placeholder='Address'
                                                name='Address'
                                                required
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
                        </div>
                  ) : (
                     <>
                        <h1 className='text-center'>Please login as a user</h1> 
                        <Login2 />
                     </>
                  )}
            </div>
      );
};

export default Purchase;
