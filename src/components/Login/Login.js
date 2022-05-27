import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';

const Login2 = () => {
      const {
            register,
            formState: { errors },
            handleSubmit,
      } = useForm();
      const { user, singInWithGoogle, setPassword, setEmail, setRegistered , handleFormSubmit} =
            useFirebase();

      // if (user) {
      //       console.log(user);
      // }

      const onSubmit = (data) => {
            console.log(data);
            setRegistered(true);
            setEmail(data.email);
            setPassword(data.password);
            handleFormSubmit();
      };
      return (
            <section>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full max-w-xs'>
                              <label className='label'>
                                    <span className='label-text'>Email</span>
                              </label>
                              <input
                                    type='Email'
                                    placeholder='Type here'
                                    className='input input-bordered w-full max-w-xs'
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
                              <label className='label'>
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
                        <div className='form-control w-full max-w-xs'>
                              <label className='label'>
                                    <span className='label-text'>password</span>
                              </label>
                              <input
                                    type='password'
                                    placeholder='Type here'
                                    className='input input-bordered w-full max-w-xs'
                                    {...register('password', {
                                          required: {
                                                value: true,
                                                message: 'password is required',
                                          },
                                          pattern: {
                                                value: /(?=.*[!@#$%^&*])/,
                                                message: 'At least one special character',
                                          },
                                    })}
                              />
                              <label className='label'>
                                    {errors.password?.type === 'required' && (
                                          <span className='label-text-alt text-red-500'>
                                                {errors.password.message}
                                          </span>
                                    )}
                                    {errors.password?.type === 'pattern' && (
                                          <span className='label-text-alt text-red-500'>
                                                {errors.password.message}
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
                  <p>
                        <small>
                              New to Biostar{' '}
                              <Link className='text-primary' to='/signup'>
                                    Create New Account
                              </Link>
                        </small>
                  </p>
                  <button
                        className='btn '
                        onClick={singInWithGoogle}
                  >
                        google lOGIN
                  </button>
            </section>
      );
};

export default Login2;
