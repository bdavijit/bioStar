import React, { useState } from 'react';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import './AddNewReview.css';
      

      

const AddNewReview = () => {
      const { user } = useFirebase();
      const [rate, useratechange] = useState(1);
      const [myUsers, setmyUsers] = useFindAdmin(user?.email);

      const UpdateRate = (btnName) => {
            if (btnName === 'plus') {
                  if (rate < 5) {
                        useratechange(rate + 1);
                  } else {
                        alert('rate must be 1 to 5 ');
                  }
            } else {
                  if (rate > 1) {
                        useratechange(rate - 1);
                  } else {
                        alert('rate must be 1 to 5 ');
                  }
            }
      };
      const Addreview = (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const image = event.target.image.value;
            const review = event.target.review.value;

            const reviewDate = {
                  name,
                  image,
                  review,
                  rate,
            };

            fetch('https://mysterious-brook-63688.herokuapp.com/review', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(reviewDate),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        alert('review added successfully!!!');
                        event.target.reset();
                  });
      };
      return (
            <div>
                  {user && !myUsers?.role ? (
                        <>
                              <div className='AddButton'>
                                    <button
                                          className='btn'
                                          onClick={() => UpdateRate('minus')}
                                    >
                                          -
                                    </button>
                                    <p>{rate}</p>
                                    <button
                                          className='btn'
                                          onClick={() => UpdateRate('plus')}
                                    >
                                          +
                                    </button>
                              </div>
                              <form onSubmit={Addreview}>
                                    <div className='AddProductBox'>
                                          <input
                                                type='text'
                                                placeholder='name'
                                                class='input m-3 input-bordered input-error w-full max-w-xs'
                                                value={user?.displayName}
                                                name='name'
                                          />
                                          <input
                                                type='text'
                                                placeholder='image'
                                                class='input m-3 input-bordered input-error w-full max-w-xs'
                                                value={user?.photoURL}
                                                name='image'
                                          />
                                          <textarea
                                                class='textarea m-3 textarea-error'
                                                placeholder='review'
                                                name='review'
                                          ></textarea>
                                          <br></br>

                                          <button
                                                className='btn '
                                                type='submit'
                                          >
                                                Add review
                                          </button>
                                    </div>
                              </form>
                        </>
                  ) : (
                        <>
                              <h1 className='text-center'>
                                    Please login as a user
                              </h1>
                              <Login2 />
                        </>
                  )}
            </div>
      );
};

export default AddNewReview;
