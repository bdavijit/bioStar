
import { useEffect, useState } from 'react';
import Reviewcard from './reviewcard';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setreviews] = useState([]);
    const [page, setpage] = useState(0);

           useEffect(() => {
                 fetch(`https://mysterious-brook-63688.herokuapp.com/reviews`)
                       .then((res) => res.json())
                       .then((data) => setreviews(data));
           }, [page]);
 




    return (
          <div className='ReviewBox'>
          {
              reviews?.map( (review) =>(
                  <Reviewcard 
                  key={review._id}
                      review = {review}
                  />
              ))
          }

                {/* <div>
                      <div className='avatar'>
                            <div className='w-24 mask mask-squircle'>
                                  <img src={reviews[1]?.image} alt='' />
                            </div>
                      </div>
                      <h1>name</h1>
                      <div className='rating rating-sm'>
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
                <div>
                      <div className='avatar'>
                            <div className='w-24 mask mask-squircle'>
                                  <img src={reviews[2]?.image} alt='' />
                            </div>
                      </div>
                      <h1>name</h1>
                      <div className='rating rating-sm'>
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
                </div> */}
          </div>
    );
};

export default Reviews;