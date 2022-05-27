import React from 'react';
import useProduct from '../../hook/useProduct';
import ProductCard from './ProductCard';

const Product = () => {
      const [allProduct, setallProduct] = useProduct();
      return (
            <section>
                  {allProduct?.map((Product) => (
                        <ProductCard
                              key={Product._id}
                              Product={Product}
                        ></ProductCard>
                  ))}
            </section>
      );
};

export default Product;
