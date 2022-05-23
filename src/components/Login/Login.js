import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
// import useFirebase from '../../hook/useFirebase';

const Login2 = () => {
      const [signInWithGoogle, user, loading, error] =
            useSignInWithGoogle(auth);
      const {
            register,
            formState: { errors },
            handleSubmit,
      } = useForm();
      //     const { user,  singInWithGoogle } = useFirebase();

      if (user) {
            console.log(user);
      }
      const onSubmit = (data) => console.log(data);
      //    console.log(error);
      console.log(user?.user?.displayName);
      return (
            <section>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div class='form-control w-full max-w-xs'>
                              <label class='label'>
                                    <span class='label-text'>Email</span>
                              </label>
                              <input
                                    type='Email'
                                    placeholder='Type here'
                                    class='input input-bordered w-full max-w-xs'
                                    {...register('email', {
                                          required: {
                                                value: true,
                                                message: 'Email is required',
                                          },
                                          pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email',
                                          },
                                    })}
                              />
                              <label class='label'>
                                    {errors.email?.type === 'required' && (
                                          <span className='label-text-alt text-red-500'>
                                                {errors.email.message}
                                          </span>
                                    )}
                                    {errors.email?.type === 'pattern' && (
                                          <span className='label-text-alt text-red-500'>
                                                {errors.email.message}
                                          </span>
                                    )}
                              </label>
                        </div>
                        <input
                              className='btn w-full max-w-xs text-white'
                              type='submit'
                              value='Login'
                        />
                  </form>
                  <button
                        className='btn btn-primary'
                        onClick={() => signInWithGoogle()}
                  >
                        google lOGIN
                  </button>
            </section>
      );
};

export default Login2;
