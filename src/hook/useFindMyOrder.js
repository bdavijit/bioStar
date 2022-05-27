import React, { useEffect, useState } from 'react';

const useFindMyOrder = (MYEmail) => {
 const [myOrders, setmyOrders] = useState();
 useEffect(() => {
       fetch(`http://localhost:5001/Orders/${MYEmail}`)
             .then((res) => res.json())
             .then((data) => setmyOrders(data));
 }, []);
 return [myOrders, setmyOrders];
};

export default useFindMyOrder;