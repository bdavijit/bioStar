import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

function App() {
      const [navControl , setnavControl ] = useState(false);
      return (
            <>
                  <button
                        className={`bg-red-600 m-3 p-5 ${
                              navControl ? 'hidden' : ''
                        }`}
                        onClick={() => setnavControl(true)}
                  >
                        <GiHamburgerMenu />
                  </button>
                  <div className='MainBox MainBox_adjust'>
                        <div className={`NavBox ${navControl ? '' : 'hidden'}`}>
                              <Header
                                    navControl={navControl}
                                    setnavControl={setnavControl}
                              />
                        </div>
                        <div className='MainBody'>
                              <Routes>
                                    <Route path='/' element={<Home />}></Route>
                                    <Route
                                          path='/Login'
                                          element={<Login />}
                                    ></Route>
                              </Routes>
                        </div>
                  </div>
            </>
      );
}

export default App;
