import { useEffect, useState } from 'react';

const useFindProduct = (P_id) => {
 const [OneProduct , setOneProduct] =useState();
 const [ApiCall , setApiCall] =useState(false);
          useEffect(() => {
                fetch(
                      `https://mysterious-brook-63688.herokuapp.com/products/${P_id}`
                )
                      .then((res) => res.json())
                      .then((data) => setOneProduct(data));
          }, [ApiCall]);
    return [OneProduct, setOneProduct, ApiCall, setApiCall];
};

export default useFindProduct;