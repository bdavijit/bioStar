import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Parts.css';

const Parts = () => {
      let [index, setindex] = useState(0);
      const [products, setProducts] = useState([]);
      const [left, setleft] = useState(false);
      const [Right, setRight] = useState(false);

      useEffect(() => {
            fetch(`https://mysterious-brook-63688.herokuapp.com/products?page=0&size=9`)
                  .then((res) => res.json())
                  .then((data) => setProducts(data));
      }, []);

      const HandelIndex = (btnName) => {
            if (btnName === 'next') {
                  if (index === products?.length - 1) {
                        setRight(true);
                  } else {
                        setindex(index + 1);
                        setleft(false);
                  }
            } else {
                  if (index === 0) {
                        setleft(true);
                  } else {
                        setindex(index - 1);
                        setRight(false);
                  }
            }
      };

      return (
            <section className='PartsBox'>
                  <button
                        className={`btn btn-circle btn-outline `}
                        onClick={() => HandelIndex('previous')}
                        disabled={left}
                  >
                        <FaAngleLeft />
                  </button>

                  <div className='partsCard'>
                        <div>
                              <img src={products[index]?.image} alt='' />
                        </div>
                        <div className='flex justify-center flex-col'>
                              <h1 className='text-4xl font-bold  text-center'>
                                    {products[index]?.name}
                              </h1>
                              <p className='py-6 text-center'>
                                    {products[index]?.description}
                              </p>
                              <button className='btn '>
                                    <Link
                                          className=''
                                          to={`/products/${products[index]?._id}`}
                                    >
                                          BuyNow
                                    </Link>
                              </button>
                        </div>
                  </div>

                  <button
                        className='btn btn-circle btn-outline'
                        onClick={() => HandelIndex('next')}
                        disabled={Right}
                  >
                        <FaAngleRight />
                  </button>
            </section>
      );
};

export default Parts;
