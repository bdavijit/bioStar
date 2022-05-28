import React from 'react';

const MakeAdminCard = (props) => {
    const { email } = props.user;
    return <div>
        <p>{email}</p>
        <button className='btn'>Make Admin</button>
    </div>;
};

export default MakeAdminCard;