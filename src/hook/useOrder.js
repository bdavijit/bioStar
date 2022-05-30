import { useEffect, useState } from 'react';

const useOrder = () => {
      const [allOrder, setallOrder] = useState();
      const [rerenderOrder, setrerenderOrder] = useState();

      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/Orders`)
                  .then((res) => res.json())
                  .then((data) => setallOrder(data));
      }, [rerenderOrder]);
      return [allOrder, setallOrder, rerenderOrder ,setrerenderOrder];
};

export default useOrder;