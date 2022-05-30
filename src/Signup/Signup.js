import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../components/Login/Login.css';
import useFirebase from '../hook/useFirebase';

const Signup = () => {
      const {
            user,
            singInWithGoogle,
            setPassword,
            setName,
            setEmail,
            handleFormSubmit,
            handleSignOut,
      } = useFirebase();
      //hook form
      const {
            register,
            formState: { errors },
            handleSubmit,
      } = useForm();

      //submit
      const onSubmit = (data) => {
            handleSignOut();
            console.log(data);
            setName(data.Name);
            setEmail(data.email);
            setPassword(data.password);
            handleFormSubmit();
      };

      return (
            <section className='LoginBox'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full max-w-xs'>
                              <label className='label'>
                                    <span className='label-text'>Name</span>
                              </label>
                              <input
                                    type='Name'
                                    placeholder='Type here'
                                    className='input input-error w-full max-w-xs'
                                    {...register('Name', {
                                          required: {
                                                value: true,
                                                message: 'Name is required',
                                          },
                                    })}
                              />
                              <label className='label'>
                                    {errors.Name?.type === 'required' && (
                                          <span className='label-text-alt text-red-500'>
                                                {errors.Name.message}
                                          </span>
                                    )}
                              </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                              <label className='label'>
                                    <span className='label-text'>Email</span>
                              </label>
                              <input
                                    type='Email'
                                    placeholder='Type here'
                                    className='input input-error w-full max-w-xs'
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
                                    className='input input-error w-full max-w-xs'
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
                              value='Registration'
                        />
                  </form>
                  <p>
                        <small>
                              Already have an account{' '}
                              <Link className='text-primary' to='/Login'>
                                    please login
                              </Link>
                        </small>
                  </p>
                  <div className='divider'>OR</div>
                  <button className='btn ' onClick={singInWithGoogle}>
                        google lOGIN
                  </button>
            </section>
      );
};

export default Signup;
