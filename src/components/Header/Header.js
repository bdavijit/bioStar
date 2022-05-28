import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import './Header.css';
// const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

const Header = (props) => {
      const { navControl, setnavControl } = props;

      const { user, handleSignOut } = useFirebase();
      console.log(user);
      const [myUsers, setmyUsers] = useFindAdmin(user?.email);
      console.log(myUsers);

      const navigate = useNavigate();

      const handelOrders = () => {
            navigate('/MyOrders/' + user.email);
            window.scrollTo(0, 0);
      };
      const handleManageProducts = () => {
            navigate('/ManageProducts/' + user.email);
            window.scrollTo(0, 0);
      };
      return (
            <section className='text-white'>
                  <div className='Biostar_Position'>
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
                        <h1 className='text-2xl'>Biostar</h1>
                  </div>

                  <h1 className='text-center text-2xl mt-4'>
                        {user?.displayName}
                  </h1>
                  {user && !myUsers?.role ? (
                        <div className='HeaderLinks MenuBox'>
                              <button
                                    className='hover:underline text-vw p-1'
                                    onClick={handelOrders}
                              >
                                    My Orders
                              </button>
                              <Link
                                    className='hover:underline text-vw p-1'
                                    to='/AddNewReview'
                              >
                                    Add A Review
                              </Link>
                              <Link
                                    className='hover:underline text-vw p-1'
                                    to='/MyProfile'
                              >
                                    My Profile
                              </Link>
                              <button className='btn' onClick={handleSignOut}>
                                    signout
                              </button>
                        </div>
                  ) : (
                        ''
                  )}
                  {user && myUsers?.role ? (
                        <div className='HeaderLinks MenuBox'>
                              <Link
                                    className='hover:underline text-vw p-1'
                                    to='/MyProfile'
                              >
                                    My Profile
                              </Link>
                              <Link
                                    className='hover:underline text-vw p-1'
                                    to='/ManageAllOrders'
                              >
                                    Manage All Orders
                              </Link>
                              <Link
                                    className='hover:underline text-vw p-1'
                                    to='/AddAProduct'
                              >
                                    Add A Product
                              </Link>
                              <Link
                                    className='hover:underline text-vw p-1'
                                    to='/MakeAdmin'
                              >
                                    Make Admin
                              </Link>
                              <button
                                    className='hover:underline text-vw p-1'
                                    onClick={handleManageProducts}
                              >
                                    Manage Products
                              </button>

                              <button className='btn' onClick={handleSignOut}>
                                    signout
                              </button>
                        </div>
                  ) : (
                        ''
                  )}
                  <h1 className='text-center text-2xl'>Main Menus</h1>
                  <div className='HeaderLinks MenuBox'>
                        <Link className='hover:underline text-vw p-1' to='/'>
                              Home
                        </Link>
                        <Link
                              className='hover:underline text-vw p-1'
                              to='/Product'
                        >
                              Product
                        </Link>
                        <Link
                              className='hover:underline text-vw p-1'
                              to='/Login'
                        >
                              Login/Register
                        </Link>
                  </div>
            </section>
      );
};

export default Header;
