import React, { useEffect, useState } from 'react';
import MakeAdminCard from './MakeAdminCard';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const[ allUser, setAlluser] = useState([]);
          useEffect(() => {
                fetch(`http://localhost:5001/User`)
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