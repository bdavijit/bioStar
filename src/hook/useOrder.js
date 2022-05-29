import React, { useEffect, useState } from 'react';

const useOrder = () => {
      const [allOrder, setallOrder] = useState();

      useEffect(() => {
            fetch(`http://localhost:5001/Orders`)
                  .then((res) => res.json())
                  .then((data) => setallOrder(data));
      }, []);
      return [allOrder, setallOrder];
};

export default useOrder;