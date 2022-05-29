import React from 'react';
import useOrder from '../../hook/useOrder';
import ManageAllOrdersCard from './ManageAllOrdersCard';

const ManageAllOrders = () => {
      const [allOrder, setallOrder] = useOrder();
      return (
            <section>
                  {allOrder?.length}
                  {allOrder?.map((Order) => (
                        <ManageAllOrdersCard
                              key={Order._id}
                              Order={Order}
                              orders={allOrder}
                              Setorders={setallOrder}
                        ></ManageAllOrdersCard>
                  ))}
            </section>
      );
};

export default ManageAllOrders;
