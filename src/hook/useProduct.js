import { useEffect, useState } from 'react';

const useProduct = () => {
      const [allProduct, setallProduct] = useState();

      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/products`)
                  .then((res) => res.json())
                  .then((data) => setallProduct(data));
      }, []);
      return [allProduct, setallProduct];
};

export default useProduct;
