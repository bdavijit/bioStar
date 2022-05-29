import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFindMyOrder from '../../hook/useFindMyOrder';
import MyOrderCard from './MyOrderCard';
import './MyOrders.css'

const MyOrders = () => {
      const { email } = useParams();
      const [myOrders, setmyOrders] = useFindMyOrder(email);
      console.log(myOrders);

      return (
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
      );
};

export default MyOrders;
