import React, { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useFindMyProduct = () => {
          const { user } = useFirebase();
          const email = user?.email;
          const [MyProduct, setMyProduct] = useState();
          useEffect(() => {
                fetch(`http://localhost:5001/Product/${email}`)
                      .then((res) => res.json())
                      .then((data) => setMyProduct(data));
          }, [user]);
    return [MyProduct, setMyProduct];
};

export default useFindMyProduct;