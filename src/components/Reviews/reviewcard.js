import React from 'react';
import './Reviews.css'

const Reviewcard = (props) => {

    const { image, name, review , rate } = props?.review;
    console.log(parseInt(rate) === 1);
    return (
          <div>
                <div className='reviewCardHome'>
                      <div className='avatar'>
                            <div className='w-24 mask mask-squircle'>
                                  <img src={image} alt='' />
                            </div>
                      </div>
                      <h1 className='text-2xl text-center'>{name}</h1>
                      <h1>{review ? review.slice(0, 100) + '...' : ''}</h1>
                      <div className='rating rating-sm '>
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                                  checked={parseInt(rate) === 1}
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                                  checked={parseInt(rate) === 2}
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                                  checked={parseInt(rate) === 3}
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                                  checked={parseInt(rate) === 4}
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                                  checked={parseInt(rate) === 5}
                            />
                      </div>
                </div>
          </div>
    );
};

export default Reviewcard;