import React, { useEffect, useState } from 'react';

import useFirebase from '../../hook/useFirebase';
import useProduct from '../../hook/useProduct';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
      // const { email } = useParams();

const [allProduct] = useProduct();

      return (
            <>
                  {allProduct?.map((product) => (
                        <ManageProductsCard
                              key={product._id}
                              product={product}
                        />
                  ))}
            </>
      );
};

export default ManageProducts;
