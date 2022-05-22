import React from 'react';
import { BiUserCheck } from 'react-icons/bi';
import { MdFeedback } from 'react-icons/md';
import { GiComputerFan } from 'react-icons/gi';
import './BusinessSummary.css'

const BusinessSummary = () => {
      return (
            <section className='BusinessSummaryBox'>
                  <div className='BusinessMenu'>
                        <BiUserCheck className='my-text-color text-2xl' />
                        <p>100</p>
                        <h1 className=''>customers</h1>
                  </div>
                  <div className='BusinessMenu'>
                        <MdFeedback className='my-text-color' />
                        <p>100</p>
                        Reviews
                  </div>
                  <div className='BusinessMenu'>
                        <GiComputerFan className='my-text-color' />
                        <p>100</p>
                        products
                  </div>
            </section>
      );
};

export default BusinessSummary;
