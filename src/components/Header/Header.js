import React from 'react';
import './Header.css';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = (props) => {
      const { navControl, setnavControl } = props;
      return (
            <section>
                  <button
                        className={`bg-red-600 p-5 `}
                        onClick={() => setnavControl(false)}
                  >
                        <FaLongArrowAltUp />
                  </button>
                  <h1 className='text-center'>Header</h1>
                  <div className='HeaderLinks'>
                        <Link to='/'>Home</Link>
                        <Link to='/Product'>Product</Link>
                        <Link to='/Orders'>orders</Link>
                        <Link to='/Register'>Register</Link>
                  </div>
            </section>
      );
};

export default Header;
