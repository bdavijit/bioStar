import React from 'react';

const MakeAdminCard = (props) => {
      const { email } = props.user;
      const MakeAdminByEmail = (event) => {
          event.preventDefault();
            // let newUserData = { ...props.user, role: 'Admin' };
            // console.log(typeof newUserData);
            
                    const ProfileDate = {
                          name: props?.user?.name || '',
                          email: props?.user?.email,
                          city: props?.user?.city || '',
                          phone_number: props?.user?.phone_number || '',
                          LinkedIn: props?.user?.LinkedIn || '',
                          education: props?.user?.education || '',
                          role: "Admin",
                          userName: "",
                    };
console.log(email);
console.log(ProfileDate);

            const url = `http://localhost:5001/user2/${email}`;
            fetch(url, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(ProfileDate),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        console.log('success', data);
                        alert('update');
                  });
      };

      return (
            <div>
                  <p>{email}</p>
                  <button className='btn' onClick={MakeAdminByEmail}>
                        Make Admin
                  </button>
            </div>
      );
};

export default MakeAdminCard;
