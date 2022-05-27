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
                <Parts />
                <h1 className='text-center text-2xl'>Where to Buy</h1>
                <WheretoBuy />
                <h1 className='text-center text-2xl'>Award</h1>
                <Award />
                <Reviews />
          </div>
    );
};

export default Home;