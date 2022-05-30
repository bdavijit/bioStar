import React from 'react';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import useProduct from '../../hook/useProduct';
import Login2 from '../Login/Login';
import './ManageProducts.css';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
      // const { email } = useParams();
      const { user } = useFirebase();

      const [myUsers, setmyUsers] = useFindAdmin(user?.email);

      const [allProduct, setallProduct  , ProductApi, setProductApicall] = useProduct();

      return (
            <div>
                  {user && myUsers?.role ? (
                        <section className='ManageProductBox'>
                              {allProduct?.map((product) => (
                                    <ManageProductsCard
                                          key={product._id}
                                          product={product}
                                          setallProduct={setallProduct}
                                          ProductApi={ProductApi}
                                          setProductApicall={setProductApicall}
                                    />
                              ))}
                        </section>
                  ) : (
                        <>
                              {!myUsers?.role === undefined ? (
                                    <>
                                          <h1 className='text-center'>
                                                Please login as a Admin
                                          </h1>
                                          <Login2 />
                                    </>
                              ) : (
                                    <h1>test</h1>
                              )}
                        </>
                  )}
            </div>
      );
};

export default ManageProducts;
