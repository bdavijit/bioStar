import { useEffect, useState } from 'react';

const useFindProduct = (P_id) => {
 const [OneProduct , setOneProduct] =useState();
          useEffect(() => {
                fetch(`https://mysterious-brook-63688.herokuapp.com/products/${P_id}`)
                      .then((res) => res.json())
                      .then((data) => setOneProduct(data));
          }, []);
    return [OneProduct, setOneProduct];
};

export default useFindProduct;