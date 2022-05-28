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
            <section className='BusinessSummaryBox'>
                  <div className='BusinessMenu'>
                        <BiUserCheck className='my-text-color text-2xl' />
                        <p>{allUser?.length}</p>
                        <h1 className=''>customers</h1>
                  </div>
                  <div className='BusinessMenu'>
                        <MdFeedback className='my-text-color' />
                        <p>{reviews?.length}</p>
                        Reviews
                  </div>
                  <div className='BusinessMenu'>
                        <GiComputerFan className='my-text-color' />
                        <p>{allProduct?.length}</p>
                        products
                  </div>
            </section>
      );
};

export default BusinessSummary;
