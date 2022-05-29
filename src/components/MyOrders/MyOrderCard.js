import React from 'react';

const MyOrderCard = (props) => {
    const { _id, pName, pImage, pPrice, quintity, paid } = props.Orders;
              const DeleteOrder = (id) => {
                    const proceed = window.confirm(
                          'Are you sure you want to delete?'
                    );
                    if (proceed) {
                          const url = `http://localhost:5001/Order/${id}`;
                          fetch(url, {
                                method: 'DELETE',
                          })
                                .then((res) => res.json())
                                .then((data) => {
                                      if (data.deletedCount > 0) {
                                            const remaining =
                                                  props.orders.filter(
                                                        (order) =>
                                                              order._id !== id
                                                  );
                                            props.Setorders(remaining);
                                      }
                                      alert('ok');
                                });
                    }
              };

    return (
          <div className='MyOrdersBoxCard'>
                <img src={pImage} alt='' />
                <p className='text-center my-text-color text-xl'>{pName}</p>
                <p className='text-center'>Price : {pPrice}</p>
                <p className='text-center'>quintity: {quintity}</p>
                {!paid ? <button className='btn m-2'>payNow</button> : 'paid'}
                {!paid ? (
                      <button
                            className='btn m-2 Bg-my-primary'
                            onClick={() => DeleteOrder(_id)}
                      >
                            Delete
                      </button>
                ) : (
                      'paid'
                )}
          </div>
    );
};

export default MyOrderCard;