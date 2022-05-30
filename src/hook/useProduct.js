import { useEffect, useState } from 'react';

const useProduct = () => {
      const [allProduct, setallProduct] = useState();
      const [ProductApi, setProductApicall] = useState(false);

      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/products`)
                  .then((res) => res.json())
                  .then((data) => setallProduct(data));
      }, [ProductApi]);
      return [allProduct, setallProduct, ProductApi, setProductApicall ];
};

export default useProduct;
