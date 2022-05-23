import React from 'react';

const Reviewcard = (props) => {

    const { image, name, review } = props?.review;
    // console.log(props.review);
    return (
          <div>
                <div>
                      <div class='avatar'>
                            <div class='w-24 mask mask-squircle'>
                                  <img src={image} alt='' />
                            </div>
                      </div>
                      <h1>{name}</h1>
                      <h1>{review ? review : ""}</h1>
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
          </div>
    );
};

export default Reviewcard;