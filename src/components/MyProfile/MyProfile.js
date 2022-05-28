import React from 'react';
import useFirebase from '../../hook/useFirebase';
import './MyProfile.css';


const MyProfile = () => {
      const { user } = useFirebase();

      const UpDateProfile = (event) => {
            alert('ok55');
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const city = event.target.city.value;
            const phone_number = event.target.phone_number.value;
            const LinkedIn = event.target.LinkedIn.value;
            const education = event.target.education.value;

            const ProfileDate = {
                  name,
                  email,
                  city,
                  phone_number,
                  LinkedIn,
                  education,
            };
            console.log(typeof ProfileDate);
            const url = `http://localhost:5001/user/${email}`;
            fetch(url, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(ProfileDate),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        console.log('success', data);
                        alert('update');
                  });
      };

      return (
            <>
                  <form onSubmit={UpDateProfile}>
                        <div className='MyProfileBox'>
                              <input
                                    type='text'
                                    placeholder='name'
                                    class='input  input-error m-2 w-full max-w-xs'
                                    value={user?.displayName}
                                    name='name'
                              />
                              <input
                                    type='text'
                                    placeholder='Email'
                                    class='input input-bordered input-error m-2 w-full max-w-xs'
                                    value={user?.email}
                                    name='email'
                              />
                              <input
                                    type='text'
                                    placeholder='city'
                                    class='input input-bordered input-error m-2 w-full max-w-xs'
                                    name='city'
                              />
                              <input
                                    type='text'
                                    placeholder='phone number'
                                    class='input input-bordered input-error m-2 w-full max-w-xs'
                                    name='phone_number'
                              />
                              <input
                                    type='text'
                                    placeholder='LinkedIn'
                                    class='input input-bordered input-error m-2 w-full max-w-xs'
                                    name='LinkedIn'
                              />
                              <textarea
                                    class='textarea textarea-error'
                                    placeholder='education'
                                    name='education'
                              ></textarea>
                              <button className='btn m-2' type='submit'>
                                    Update
                              </button>
                        </div>
                  </form>
            </>
      );
};

export default MyProfile;
