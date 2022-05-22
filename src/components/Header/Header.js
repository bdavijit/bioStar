import React from 'react';
import './Header.css';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = (props) => {
      const { navControl, setnavControl } = props;
      return (
            <section className='text-white'>
                  <button
                        className={`Bg-my-primary p-5 `}
                        onClick={() => setnavControl(false)}
                  >
                        <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='h-6 w-6'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                        >
                              <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M6 18L18 6M6 6l12 12'
                              />
                        </svg>
                        {/* <FaLongArrowAltUp /> */}
                  </button>
                  <h1 className='text-center text-2xl'>Biostar</h1>
                  <h1 className='text-center text-2xl mt-4'>Avijit Kundu</h1>
                  <div className='HeaderLinks'>
                        <Link className='hover:underline text-vw' to='/'>
                              Home
                        </Link>
                        <Link className='hover:underline text-vw' to='/Product'>
                              Product
                        </Link>
                        <Link className='hover:underline text-vw' to='/Orders'>
                              orders
                        </Link>
                        <Link
                              className='hover:underline text-vw'
                              to='/Register'
                        >
                              Register
                        </Link>
                  </div>
                  <h1 className='text-center text-2xl'>Main Menus</h1>
                  <div className='HeaderLinks'>
                        <Link className='hover:underline text-vw' to='/'>
                              Home
                        </Link>
                        <Link className='hover:underline text-vw' to='/Product'>
                              Product
                        </Link>
                        <Link className='hover:underline text-vw' to='/Orders'>
                              orders
                        </Link>
                        <Link
                              className='hover:underline text-vw'
                              to='/Register'
                        >
                              Register
                        </Link>
                  </div>
            </section>
      );
};

export default Header;
