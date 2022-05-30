import React from 'react';
import useOrder from '../../hook/useOrder';
import ManageAllOrdersCard from './ManageAllOrdersCard';

const ManageAllOrders = () => {
      const [allOrder, setallOrder, rerenderOrder, setrerenderOrder] =
            useOrder();
      return (
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
      );
};

export default ManageAllOrders;
