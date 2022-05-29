import { useEffect, useState } from 'react';

const useFindMyProduct = (MYEmail) => {
      const [MyProduct, setMyProduct] = useState();
      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/Product/${MYEmail}`)
                  .then((res) => res.json())
                  .then((data) => setMyProduct(data));
      }, []);
      return [MyProduct, setMyProduct];
};

export default useFindMyProduct;