import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
import './Header.css';
// const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

const Header = (props) => {
      const { navControl, setnavControl } = props;

      const { user, handleSignOut } = useFirebase();
      console.log(user);
                  const navigate = useNavigate();

                  const handelOrders = () => {
                        navigate('/MyOrders/' + user.email);
                        window.scrollTo(0, 0);
                  };
      return (
            <section className='text-white'>
                  <button
                        className={`Bg-my-primary p-5 `}
                        onClick={() => setnavControl(false)}
                  >
                        <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                        >
                              <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                              />
                        </svg>
                        {/* <FaLongArrowAltUp /> */}
                  </button>
                  <h1 className='text-center text-2xl'>Biostar</h1>
                  <h1 className='text-center text-2xl mt-4'>
                        {user?.displayName}
                  </h1>
                  {user ? (
                        <div className='HeaderLinks'>
                              <Link className='hover:underline text-vw' to='/'>
                                    Home
                              </Link>
                              <button
                                    className='hover:underline text-vw'
                                    onClick={handelOrders}
                              >
                                    My Orders
                              </button>
                              <Link
                                    className='hover:underline text-vw'
                                    to='/AddNewReview'
                              >
                                    Add A Review
                              </Link>
                              <Link
                                    className='hover:underline text-vw'
                                    to='/MyProfile'
                              >
                                    My Profile
                              </Link>
                              <button onClick={handleSignOut}>signout</button>
                        </div>
                  ) : (
                        ''
                  )}
                  <h1 className='text-center text-2xl'>Main Menus</h1>
                  <div className='HeaderLinks'>
                        <Link className='hover:underline text-vw' to='/'>
                              Home
                        </Link>
                        <Link className='hover:underline text-vw' to='/Product'>
                              Product
                        </Link>
                        <Link className='hover:underline text-vw' to='/Login'>
                              Login/Register
                        </Link>
                  </div>
            </section>
      );
};

export default Header;
