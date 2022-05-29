import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../Business Summary/BusinessSummary';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Award from './Award/Award';
import WheretoBuy from './Where to Buy/WheretoBuy';

const Home = () => {
    return (
          <div>
                <Banner />
                <BusinessSummary />

                <h1 className='text-center text-5xl m-10 my-text-color'>
                      Our Collection
                </h1>
                <Parts />
                <h1 className='text-center text-5xl m-10 my-text-color'>
                      Where to Buy
                </h1>
                <WheretoBuy />
                <h1 className='text-center text-5xl m-10 my-text-color'>
                      Award
                </h1>
                <Award />
                <h1 className='text-center text-5xl m-10 my-text-color'>
                      Reviews
                </h1>
                <Reviews />
          </div>
    );
};

export default Home;