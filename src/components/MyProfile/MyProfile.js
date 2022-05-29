import React from 'react';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import './MyProfile.css';

const MyProfile = () => {
      const { user } = useFirebase();

      const [myUsers, setmyUsers] = useFindAdmin(user?.email);

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
            const url = `https://mysterious-brook-63688.herokuapp.com/user/${email}`;
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
            <div>
                  {user ? (
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
                                          <button
                                                className='btn m-2'
                                                type='submit'
                                          >
                                                Update
                                          </button>
                                    </div>
                              </form>
                        </>
                  ) : (
                        <>
                              <h1 className='text-center'>
                                    Please login
                              </h1>
                              <Login2 />
                        </>
                  )}
            </div>
      );
};

export default MyProfile;
