import React, { useEffect, useState } from 'react';
import useFindMyProduct from '../../hook/useFindMyProduct';
import useFirebase from '../../hook/useFirebase';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
const [MyProduct, setMyProduct] = useFindMyProduct();

      return (
            <>
            {/* <h1>abc</h1> */}
                  {MyProduct?.map((product) => (
                        <ManageProductsCard
                              key={product._id}
                              product={product}
                        />
                  ))}
            </>
      );
};

export default ManageProducts;
