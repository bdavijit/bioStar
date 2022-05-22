import React, { useEffect, useState } from 'react';
import './Parts.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Parts = () => {
      const [page, setPage] = useState(0);
      const [size, setSize] = useState(1);
      const [products, setProducts] = useState([]);

      useEffect(() => {
            fetch(`http://localhost:5001/products?page=${page}&size=${size}`)
                  .then((res) => res.json())
                  .then((data) => setProducts(data));
      }, [page, size]);

      const HandelPage =(btnName)=>{
            if(page >= 0){
                  if (btnName === 'next') {
                        setPage(page + 1);
                  } else{
                        setPage(page - 1);
                  }
                  console.log("ok");
            }
      }

      return (
            <section className='PartsBox'>
                  <button
                        class='btn btn-circle btn-outline'
                        onClick={() => HandelPage('previous')}
                  >
                        <FaAngleLeft />
                  </button>
                  <div>
                        <div class=''>
                              <div>
                                    <img src={products[0]?.image} alt='' />
                                    <div>
                                          <h1 class='text-5xl font-bold'>
                                                {products[0]?.name}
                                          </h1>
                                          <p class='py-6'>
                                                {products[0]?.description}
                                          </p>
                                          <button class='btn btn-primary'>
                                                Open
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <button
                        class='btn btn-circle btn-outline'
                        onClick={() => HandelPage('next')}
                  >
                        <FaAngleRight />
                  </button>
            </section>
      );
};

export default Parts;
