import React from 'react';
import useProduct from '../../hook/useProduct';
import Loading from '../Loading/Loading';
import './Product.css';
import ProductCard from './ProductCard';

const Product = () => {
      const [allProduct, setallProduct] = useProduct();
      return (
            <>
                  {allProduct ? '' : <Loading />}
                  <section className='ProductBox '>
                        {allProduct?.map((Product) => (
                              <ProductCard
                                    key={Product._id}
                                    Product={Product}
                              ></ProductCard>
                        ))}
                  </section>
            </>
      );
};

export default Product;
