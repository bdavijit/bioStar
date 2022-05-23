
import { useEffect, useState } from 'react';
import Reviewcard from './reviewcard';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setreviews] = useState([]);
    const [page, setpage] = useState(0);

           useEffect(() => {
                 fetch(`http://localhost:5001/reviews`)
                       .then((res) => res.json())
                       .then((data) => setreviews(data));
           }, [page]);
 




    return (
          <div className='ReviewBox'>
          {
              reviews.map( (review) =>(
                  <Reviewcard 
                      review = {review}
                  />
              ))
          }

                {/* <div>
                      <div class='avatar'>
                            <div class='w-24 mask mask-squircle'>
                                  <img src={reviews[1]?.image} alt='' />
                            </div>
                      </div>
                      <h1>name</h1>
                      <div class='rating rating-sm'>
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                                  checked
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                      </div>
                </div>
                <div>
                      <div class='avatar'>
                            <div class='w-24 mask mask-squircle'>
                                  <img src={reviews[2]?.image} alt='' />
                            </div>
                      </div>
                      <h1>name</h1>
                      <div class='rating rating-sm'>
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                                  checked
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                            <input
                                  type='radio'
                                  name='rating-6'
                                  class='mask mask-star-2 bg-orange-400'
                            />
                      </div>
                </div> */}
          </div>
    );
};

export default Reviews;