import React, { useEffect, useState } from 'react';
import { BiUserCheck } from 'react-icons/bi';
import { GiComputerFan } from 'react-icons/gi';
import { MdFeedback } from 'react-icons/md';
import useProduct from '../../hook/useProduct';
import './BusinessSummary.css';

const BusinessSummary = () => {
      const [allProduct] = useProduct();
      const [reviews, setreviews] = useState([]);

      useEffect(() => {
            fetch(`http://localhost:5001/reviews`)
                  .then((res) => res.json())
                  .then((data) => setreviews(data));
      }, []);
      const [allUser, setAlluser] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:5001/User`)
                  .then((res) => res.json())
                  .then((data) => setAlluser(data));
      }, []);
      return (
            <section className='BusinessSummaryBox mt-10'>
                  <div className='BusinessMenu'>
                        <BiUserCheck className='my-text-color text-6xl' />
                        <p className='text-3xl mt-2'>{allUser?.length}</p>
                        <h1 className='text-2xl'>customers</h1>
                  </div>
                  <div className='BusinessMenu'>
                        <MdFeedback className='my-text-color text-6xl' />
                        <p className='text-3xl mt-2'>{reviews?.length}</p>
                        <h1 className='text-2xl'>Reviews</h1>
                  </div>
                  <div className='BusinessMenu'>
                        <GiComputerFan className='my-text-color text-6xl' />
                        <p className='text-3xl mt-2'>{allProduct?.length}</p>
                        <h1 className='text-2xl'>Products</h1>
                  </div>
            </section>
      );
};

export default BusinessSummary;
