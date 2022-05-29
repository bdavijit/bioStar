import React from 'react';
import { useParams } from 'react-router-dom';
import useFindAdmin from '../../hook/usefindAdmin';
import useFindMyOrder from '../../hook/useFindMyOrder';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import MyOrderCard from './MyOrderCard';
import './MyOrders.css';

const MyOrders = () => {
      const { email } = useParams();
      const [myOrders, setmyOrders] = useFindMyOrder(email);
      console.log(myOrders);
            const { user } = useFirebase();

            const [myUsers, setmyUsers] = useFindAdmin(user?.email);

      return (
            <div>
                  {user && !myUsers?.role ? (
                        <div className='MyOrdersBox'>
                              {myOrders?.map((Orders) => (
                                    <MyOrderCard
                                          Orders={Orders}
                                          key={Orders._id}
                                          orders={myOrders}
                                          Setorders={setmyOrders}
                                    />
                              ))}
                        </div>
                  ) : (
                        <>
                              <h1 className='text-center'>
                                    Please login as a user
                              </h1>
                              <Login2 />
                        </>
                  )}
            </div>
      );
};

export default MyOrders;
