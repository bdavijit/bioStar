import { useEffect, useState } from 'react';

const useOrder = () => {
      const [allOrder, setallOrder] = useState();

      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/Orders`)
                  .then((res) => res.json())
                  .then((data) => setallOrder(data));
      }, []);
      return [allOrder, setallOrder];
};

export default useOrder;