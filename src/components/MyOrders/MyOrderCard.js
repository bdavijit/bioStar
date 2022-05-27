import React from 'react';

const MyOrderCard = (props) => {
    const { pName, pImage, pPrice, quintity, paid } = props.Orders;
    return (
          <>
                <img src={pImage} alt='' />
                <p>{pName}</p>
                <p>Price : {pPrice}</p>
                <p>quintity: {quintity}</p>
                {!paid ? <button className='btn'>payNow</button> : 'paid'}
          </>
    );
};

export default MyOrderCard;