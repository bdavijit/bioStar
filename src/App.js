import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewReview from './components/AddNewReview/AddNewReview';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login2 from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Product from './components/Product/Product';
import Purchase from './components/purchase/Purchase';
import Signup from './Signup/Signup';


import './style.css';

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
                                          element={<Login2 />}
                                    ></Route>
                                    <Route
                                          path='/signup'
                                          element={<Signup />}
                                    ></Route>
                                    <Route
                                          path='/Product'
                                          element={<Product />}
                                    ></Route>
                                    <Route
                                          path='/Products/:pId'
                                          element={<Purchase />}
                                    ></Route>
                                    <Route
                                          path='/MyOrders/:email'
                                          element={<MyOrders />}
                                    ></Route>
                                    <Route
                                          path='/AddNewReview'
                                          element={<AddNewReview />}
                                    ></Route>
                              </Routes>
                              <Footer />
                        </div>
                  </div>
            </>
      );
}

export default App;
