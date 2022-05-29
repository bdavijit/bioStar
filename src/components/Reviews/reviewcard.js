import React from 'react';
import './Reviews.css'

const Reviewcard = (props) => {

    const { image, name, review } = props?.review;
    // console.log(props.review);
    return (
          <div >
                <div className='reviewCardHome'>
                      <div className='avatar'>
                            <div className='w-24 mask mask-squircle'>
                                  <img src={image} alt='' />
                            </div>
                      </div>
                      <h1 className='text-2xl text-center'>{name}</h1>
                      <h1>{review ? review.slice(0, 100) + "..." : ''}</h1>
                      <div className='rating rating-sm '>
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                                  checked
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  className='mask mask-star-2 bg-orange-400'
                            />
                      </div>
                </div>
          </div>
    );
};

export default Reviewcard;