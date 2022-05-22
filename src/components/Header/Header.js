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
                        <FaLongArrowAltUp />
                  </button>
                  <h1 className='text-center text-2xl'>Header</h1>
                  <div className='HeaderLinks'>
                        <Link className='hover:underline' to='/'>
                              Home
                        </Link>
                        <Link className='hover:underline' to='/Product'>
                              Product
                        </Link>
                        <Link className='hover:underline' to='/Orders'>
                              orders
                        </Link>
                        <Link className='hover:underline' to='/Register'>
                              Register
                        </Link>
                  </div>
            </section>
      );
};

export default Header;
