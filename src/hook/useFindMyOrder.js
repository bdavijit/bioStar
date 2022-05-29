import { useEffect, useState } from 'react';

const useFindMyOrder = (MYEmail) => {
 const [myOrders, setmyOrders] = useState();
 useEffect(() => {
       fetch(`https://mysterious-brook-63688.herokuapp.com/Orders/${MYEmail}`)
             .then((res) => res.json())
             .then((data) => setmyOrders(data));
 }, []);
 return [myOrders, setmyOrders];
};

export default useFindMyOrder;