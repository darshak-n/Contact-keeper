import React, { useState } from 'react';

const Login = () => {
  const [user, setuser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;
  const onChange = e => setuser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    console.log('inside the ');
  };
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          ></input>
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        ></input>
      </form>
    </div>
  );
};

export default Login;
