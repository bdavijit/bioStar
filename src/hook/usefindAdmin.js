
// http://localhost:5001/users/bdavijit01@gmail.com

import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useFindAdmin = (MYEmail) => {
    const { user } = useFirebase();
      const [myUsers, setmyUsers] = useState();
      useEffect(() => {
            fetch(`http://localhost:5001/Users/${MYEmail}`)
                  .then((res) => res.json())
                  .then((data) => setmyUsers(data));
      }, [user]);
      return [myUsers, setmyUsers];
};

export default useFindAdmin;
