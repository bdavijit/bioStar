import {
      createUserWithEmailAndPassword,
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
  import { ToastContainer, toast } from 'react-toastify';
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
                              const user = result.user;
                              console.log(user);
                              setUser(user);
                              setError('');
                              verifyEmail();
                              setUserName(name);
                              SetLoading(false);
                        })
                        .catch((error) => {
                              setError(error.message);
                        });
            }
      };

      const singInWithGoogle = () => {
            signInWithPopup(auth, googleProvider).then((result) => {
                  const user = result.user;
                  setUser(user);
                  console.log(user);
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
