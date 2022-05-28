import React, { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useFindMyProduct = (MYEmail) => {
      const [MyProduct, setMyProduct] = useState();
      useEffect(() => {
            fetch(`http://localhost:5001/Product/${MYEmail}`)
                  .then((res) => res.json())
                  .then((data) => setMyProduct(data));
      }, []);
      return [MyProduct, setMyProduct];
};

export default useFindMyProduct;