import React, { useState } from 'react';
import useFirebase from '../../hook/useFirebase';

const AddNewReview = () => {
      const { user } = useFirebase();
      const [rate, useratechange] = useState(1);

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

             fetch('http://localhost:5001/review', {
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
            <>
                  <button className='btn' onClick={() => UpdateRate('minus')}>
                        -
                  </button>
                  <p>{rate}</p>
                  <button className='btn' onClick={() => UpdateRate('plus')}>
                        +
                  </button>
                  <form
                        onSubmit={Addreview}
                        style={{
                              display: 'flex',
                        }}
                  >
                        <input
                              type='text'
                              placeholder='name'
                              class='input input-bordered input-error w-full max-w-xs'
                              value={user?.displayName}
                              name='name'
                        />
                        <input
                              type='text'
                              placeholder='image'
                              class='input input-bordered input-error w-full max-w-xs'
                              value={user?.photoURL}
                              name='image'
                        />
                        <textarea
                              class='textarea textarea-error'
                              placeholder='review'
                              name='review'
                        ></textarea>
                        <br></br>

                        <button className='btn ' type='submit'>
                              Add review
                        </button>
                  </form>
            </>
      );
};

export default AddNewReview;
