import React from 'react';

const ManageAllOrdersCard = (props) => {
      const {
            pId,
            paid,
            pName,
            pImage,
            pPrice,
            name,
            email,
            mobile,
            Address,
            status,
      } = props.Order;

      const OrderStateChange = (state) => {
            console.log('ok');
            const order = {
                  pId,
                  paid,
                  pName,
                  pImage,
                  pPrice,
                  name,
                  email,
                  mobile,
                  Address,
                  status: state,
            };
            const url = `https://mysterious-brook-63688.herokuapp.com/orders/${pId}`;
            fetch(url, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(order),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        console.log('success', data);
                        alert(' order update');
                        window.location.reload();
                  });
      };
        const DeleteOrder = (id) => {
              const proceed = window.confirm(
                    'Are you sure you want to delete?'
              );
              if (proceed) {
                    const url = `https://mysterious-brook-63688.herokuapp.com/Order/${id}`;
                    fetch(url, {
                          method: 'DELETE',
                    })
                          .then((res) => res.json())
                          .then((data) => {
                              console.log(data.deletedCount);
                                if (data.deletedCount > 0) {
                                      const remaining = props.orders.filter(
                                            (order) => order._id !== id
                                      );
                                      props.Setorders(remaining);
                                }
                                alert('ok');
                          });
              }
        };
      return (
            <section>
                  <div>
                        <img src={pImage} alt='' />
                  </div>
                  <div>
                        <p>{pName}</p>
                        <p>{pPrice}</p>
                        <p>{status}</p>
                  </div>
                  <div>
                        {status === 'unpaid' ? (
                              <>
                                    <button
                                          className='btn'
                                          onClick={() =>
                                                OrderStateChange('paid')
                                          }
                                    >
                                          paid order
                                    </button>
                                    <button
                                          className='btn m-2 '
                                          onClick={() => DeleteOrder(pId)}
                                    >
                                          Delete
                                    </button>
                              </>
                        ) : (
                              <button
                                    className='btn'
                                    onClick={() => OrderStateChange('shipped')}
                              >
                                    shipped
                              </button>
                        )}
                  </div>
            </section>
      );
};

export default ManageAllOrdersCard;
