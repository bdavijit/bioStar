import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
      return (
            <div className=''>
                  <div class='drawer drawer-mobile'>
                        <input
                              id='my-drawer-2'
                              type='checkbox'
                              class='drawer-toggle'
                        />
                        <div class='drawer-content flex flex-col w-20 m-1'>
                              <label
                                    for='my-drawer-2'
                                    class='btn btn-primary drawer-button lg:hidden'
                              >
                                    <GiHamburgerMenu />
                              </label>
                        </div>
                        <div class='drawer-side'>
                              <label
                                    for='my-drawer-2'
                                    class='drawer-overlay'
                              ></label>
                              <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
                                    <li>
                                          <a>Sidebar Item 1</a>
                                    </li>
                                    <li>
                                          <a>Sidebar Item 2</a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default Header;
