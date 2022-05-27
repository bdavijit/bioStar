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
          <>
                <img src={pImage} alt='' />
                <p>{pName}</p>
                <p>Price : {pPrice}</p>
                <p>quintity: {quintity}</p>
                {!paid ? <button className='btn'>payNow</button> : 'paid'}
                <button className='btn' onClick={() => DeleteOrder(_id)}>
                      Delete
                </button>
          </>
    );
};

export default MyOrderCard;