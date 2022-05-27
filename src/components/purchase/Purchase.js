import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFindProduct from '../../hook/useFindProduct';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';

const Purchase = () => {
      const { pId } = useParams();
      const { user } = useFirebase();

      const [OneProduct, setOneProduct] = useState();
      useEffect(() => {
            fetch(`http://localhost:5001/products/${pId}`)
                  .then((res) => res.json())
                  .then((data) => setOneProduct(data));
      }, []);

      console.log(user);

      return (
            <div>
                  {user ? (
                        <div>
                              <img src={OneProduct?.image} alt='' />
                              <p>{OneProduct?.name}</p>
                              <p>{OneProduct?.description}</p>
                              <p>{OneProduct?.price}</p>
                              <button className='btn btn-primary'>
                                    checkout
                              </button>
                        </div>
                  ) : (
                       <Login2 />
                  )}
            </div>
      );
};

export default Purchase;
