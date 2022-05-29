import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAProduct from './components/AddAProduct/AddAProduct';
import AddNewReview from './components/AddNewReview/AddNewReview';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login2 from './components/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MyPortfolio from './components/My Portfolio/MyPortfolio';
import MyOrders from './components/MyOrders/MyOrders';
import MyProfile from './components/MyProfile/MyProfile';
import Product from './components/Product/Product';
import Purchase from './components/purchase/Purchase';
import Updateproducts from './components/Updateproducts/Updateproducts';
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
                              } w-screen`}
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
                                    <Route
                                          path='/MyProfile'
                                          element={<MyProfile />}
                                    ></Route>

                                    <Route
                                          path='/AddAProduct'
                                          element={<AddAProduct />}
                                    ></Route>
                                    <Route
                                          path='/MakeAdmin'
                                          element={<MakeAdmin />}
                                    ></Route>
                                    <Route
                                          path='/ManageProducts/:email'
                                          element={<ManageProducts />}
                                    ></Route>
                                    <Route
                                          path='/Updateproducts/:pid'
                                          element={<Updateproducts />}
                                    ></Route>
                                    <Route
                                          path='/MyPortfolio'
                                          element={<MyPortfolio />}
                                    ></Route>
                                    <Route
                                          path='/ManageAllOrders'
                                          element={<ManageAllOrders />}
                                    ></Route>
                                    <Route path='*' element={<Error />} />
                              </Routes>
                              <Footer />
                        </div>
                  </div>
            </>
      );
}

export default App;
