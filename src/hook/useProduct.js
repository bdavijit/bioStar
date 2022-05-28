import { useEffect, useState } from 'react';

const useProduct = () => {
      const [allProduct, setallProduct] = useState();

      
      useEffect(() => {
            fetch(`http://localhost:5001/products`)
                  .then((res) => res.json())
                  .then((data) => setallProduct(data));
      }, []);
      return [allProduct, setallProduct];
};

export default useProduct;
