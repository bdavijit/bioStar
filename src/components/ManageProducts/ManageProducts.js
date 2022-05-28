import React, { useEffect, useState } from 'react';
import './ManageProducts.css'

import useFirebase from '../../hook/useFirebase';
import useProduct from '../../hook/useProduct';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
      // const { email } = useParams();

const [allProduct, setallProduct] = useProduct();

      return (
            <section className='ManageProductBox'>
                  {allProduct?.map((product) => (
                        <ManageProductsCard
                              key={product._id}
                              product={product}
                              setallProduct={setallProduct}
                        />
                  ))}
            </section>
      );
};

export default ManageProducts;
