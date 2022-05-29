import React, { useEffect, useState } from 'react';
import './MakeAdmin.css';
import MakeAdminCard from './MakeAdminCard';

const MakeAdmin = () => {
    const[ allUser, setAlluser] = useState([]);
          useEffect(() => {
                fetch(`https://mysterious-brook-63688.herokuapp.com/User`)
                      .then((res) => res.json())
                      .then((data) => setAlluser(data));
          }, []);

    return (
          <div className='MakeAdminBox'>
                {allUser?.map((user) => (
                      <MakeAdminCard
                            key={user._id}
                            user={user}
                      ></MakeAdminCard>
                ))}
          </div>
    );
};

export default MakeAdmin;