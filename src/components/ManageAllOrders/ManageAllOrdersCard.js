import React from 'react';
import './ManageAllOrder.css';

const ManageAllOrdersCard = (props) => {


      const {
            _id,
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
            const url = `https://mysterious-brook-63688.herokuapp.com/orders/${_id}`;
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
                        props.setrerenderOrder(!props.rerenderOrder);
                        // window.location.reload();
                  });
      };
      const DeleteOrder = (id) => {
            const proceed = window.confirm('Are you sure you want to delete?');
            if (proceed) {
                  const url = `https://mysterious-brook-63688.herokuapp.com/Order/${id}`;
                  fetch(url, {
                        method: 'DELETE',
                  })
                        .then((res) => res.json())
                        .then((data) => {
                             props.setrerenderOrder(!props.rerenderOrder);
                              // if (data.deletedCount > 0) {
                              //       const remaining = props.orders.filter(
                              //             (order) => order._id !== id
                              //       );
                              //       props.Setorders(remaining);
                              // }
                              alert('ok');
                        });
            }
      };
      return (
            <section className='ManageAllOrderBox'>
                  <div className='ManageAllSec'>
                        <img src={pImage} alt='' />
                  </div>
                  <div className=''>
                        <p className='text-center'>{pName}</p>
                        <p className='text-center'>{pPrice}</p>
                        <p className='text-center'>{status}</p>
                  </div>
                  <div className='ManageAllSec'>
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
                                          onClick={() => DeleteOrder(_id)}
                                    >
                                          Delete
                                    </button>
                              </>
                        ) : (
                              <button
                                    className='btn'
                                    onClick={() => OrderStateChange('shipped')}
                                    disabled={status === 'shipped'}
                              >
                                    shipped
                              </button>
                        )}
                  </div>
            </section>
      );
};

export default ManageAllOrdersCard;
