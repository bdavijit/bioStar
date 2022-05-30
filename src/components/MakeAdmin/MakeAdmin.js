import React, { useEffect, useState } from 'react';
import useFindAdmin from '../../hook/usefindAdmin';
import useFirebase from '../../hook/useFirebase';
import Login2 from '../Login/Login';
import './MakeAdmin.css';
import MakeAdminCard from './MakeAdminCard';

const MakeAdmin = () => {
    const[ allUser, setAlluser] = useState([]);
      const { user } = useFirebase();

      const [myUsers, setmyUsers] = useFindAdmin(user?.email);
          useEffect(() => {
                fetch(`https://mysterious-brook-63688.herokuapp.com/User`)
                      .then((res) => res.json())
                      .then((data) => setAlluser(data));
          }, []);

    return (
          <div>
                {user && myUsers?.role ? (
                      <div className='MakeAdminBox'>
                            {allUser?.map((user) => (
                                  <MakeAdminCard
                                        key={user._id}
                                        user={user}
                                  ></MakeAdminCard>
                            ))}
                      </div>
                ) : (
                      <>
                            {!myUsers?.role === undefined ? (
                                  <>
                                        <h1 className='text-center'>
                                              Please login as a Admin
                                        </h1>
                                        <Login2 />
                                  </>
                            ) : (
                                  <h1>test</h1>
                            )}
                      </>
                )}
          </div>
    );
};

export default MakeAdmin;