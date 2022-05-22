import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
      const [navControl , setnavControl ] = useState(false);
      return (
            <>
                  <button
                        className={`Bg-my-primary m-3 p-5 ${
                              navControl ? 'hidden' : ''
                        }`}
                        onClick={() => setnavControl(true)}
                  >
                        <GiHamburgerMenu className='text-white' />
                  </button>
                  <div className='MainBox MainBox_adjust'>
                        <div className={`NavBox ${navControl ? '' : 'hidden'}`}>
                              <Header
                                    navControl={navControl}
                                    setnavControl={setnavControl}
                              />
                        </div>
                        <div
                              className={`MainBody ${
                                    navControl ? 'MoveBody' : ''
                              }`}
                        >
                              <Routes>
                                    <Route path='/' element={<Home />}></Route>
                                    <Route
                                          path='/Login'
                                          element={<Login />}
                                    ></Route>
                              </Routes>
                              <Footer/>
                        </div>
                  </div>
            </>
      );
}

export default App;
