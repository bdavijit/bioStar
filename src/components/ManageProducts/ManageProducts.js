import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFindMyProduct from '../../hook/useFindMyProduct';
import useFirebase from '../../hook/useFirebase';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
      const { email } = useParams();
const [MyProduct, setMyProduct] = useFindMyProduct(email);

      return (
            <>
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
