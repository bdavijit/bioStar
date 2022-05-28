import {
      createUserWithEmailAndPassword,
      getAdditionalUserInfo,
      getAuth,
      GoogleAuthProvider,
      onAuthStateChanged,
      sendEmailVerification,
      sendPasswordResetEmail,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
      const [user, setUser] = useState({});

      const [registered, setRegistered] = useState(false);
      const [error, setError] = useState('');
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [loading, SetLoading] = useState(false);

      //update name
      const setUserName = (username) => {
            console.log('111ok');

            updateProfile(auth.currentUser, {
                  displayName: username,
            })
                  .then(() => {
                        console.log('updating name');
                  })
                  .catch((error) => {
                        setError(error.message);
                  });
      };

      const handleNameBlur = (event) => {
            setName(event.target.value);
      };
      const handleEmailBlur = (event) => {
            setEmail(event.target.value);
      };

      const handlePasswordBlur = (event) => {
            setPassword(event.target.value);
      };

      const handleRegisteredChange = (event) => {
            setRegistered(event.target.checked);
      };

      const handlePasswordReset = () => {
            SetLoading(true);
            if (!email) {
                  toast('Please type Email');
                  return;
            }
            sendPasswordResetEmail(auth, email)
                  .then(() => {
                        console.log('email sent');
                        toast('email sent');
                        SetLoading(false);
                  })
                  .catch((error) => {
                        toast(error.message);
                  });
      };

      const verifyEmail = () => {
            sendEmailVerification(auth.currentUser).then(() => {
                  console.log('Email Verification Sent');
                  setError('Email Verification Sent');
            });
      };

      const handleFormSubmit = () => {
  
            SetLoading(true);

            if (registered) {
                  signInWithEmailAndPassword(auth, email, password)
                        .then((result) => {
                              const user = result.user;
                              setError('');
                              console.log(user);
                              setUser(user);
                              SetLoading(false);
                        })
                        .catch((error) => {
                              setError(error.message);
                        });
            } else {
                  //create user
                  createUserWithEmailAndPassword(auth, email, password)
                        .then((result) => {
                              const user2 = result.user;
                              console.log(user2);
                              setUser(user2);
                              setError('');
                              verifyEmail();
                              setUserName(name);
                              SetLoading(false);
                              //add to database
                              const Username = user2?.displayName;
                              const email = user2?.email;

                              const User = {
                                    Username,
                                    email,
                              };
                              fetch('http://localhost:5001/User', {
                                    method: 'POST',
                                    headers: {
                                          'content-type': 'application/json',
                                    },
                                    body: JSON.stringify(User),
                              })
                                    .then((res) => res.json())
                                    .then((data) => {
                                          alert('User added successfully!!!');
                                    });

                        })
                        .catch((error) => {
                              setError(error.message);
                        });
            }
      };

      const singInWithGoogle = () => {
            signInWithPopup(auth, googleProvider)
                  //             .then(async (result) => {
                  //       const isFirstLogin = getAdditionalUserInfo(result).isNewUser
                  //    }
                  .then(async (result) => {
                        const user2 = result.user;
                        setUser(user2);
                        const isFirstLogin =
                              getAdditionalUserInfo(result).isNewUser;

                  if(isFirstLogin){
                        //add to database
                        const name = user2?.displayName;
                        const email = user2?.email;

                        const User = {
                              name,
                              email,
                        };

                        fetch('http://localhost:5001/User', {
                              method: 'POST',
                              headers: {
                                    'content-type': 'application/json',
                              },
                              body: JSON.stringify(User),
                        })
                              .then((res) => res.json())
                              .then((data) => {
                                    alert('User added successfully!!!');
                              });
                  }
                  });
      };

      const handleSignOut = () => {
            signOut(auth).then(() => {});
      };

      //value ta dhore rakhe
      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  setUser(user);
            });
      }, []);

      return {
            user,
            handleSignOut,
            singInWithGoogle,
            handleNameBlur,
            handleEmailBlur,
            handlePasswordBlur,
            handleRegisteredChange,
            handlePasswordReset,
            verifyEmail,
            handleFormSubmit,
            error,
            registered,
            loading,
            SetLoading,
            setName,
            setEmail,
            setPassword,
            setRegistered,
      };
};

export default useFirebase;
