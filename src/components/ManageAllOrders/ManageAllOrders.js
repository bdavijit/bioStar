import React from 'react';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import useOrder from '../../hook/useOrder';
import Login2 from '../Login/Login';
import ManageAllOrdersCard from './ManageAllOrdersCard';

const ManageAllOrders = () => {
      const [allOrder, setallOrder, rerenderOrder, setrerenderOrder] =
            useOrder();
                  const { user } = useFirebase();

                  const [myUsers, setmyUsers] = useFindAdmin(user?.email);
      return (
            <>
                  {user && myUsers?.role ? (
                        <section>
                              {allOrder?.map((Order) => (
                                    <ManageAllOrdersCard
                                          key={Order._id}
                                          Order={Order}
                                          orders={allOrder}
                                          Setorders={setallOrder}
                                          rerenderOrder={rerenderOrder}
                                          setrerenderOrder={setrerenderOrder}
                                    ></ManageAllOrdersCard>
                              ))}
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
            </>
      );
};

export default ManageAllOrders;
