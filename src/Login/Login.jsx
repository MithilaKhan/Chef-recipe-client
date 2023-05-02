import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button.jsx';

const Login = () => {
   return (
      <div className='lg:mt-16 lg:mb-14 '>
 <div className="hero  ">
  <div className="hero-content  ">
    <div className="card  w-full max-w-sm shadow-2xl ">
    
      <div className="card-body w-96">
      <h1 className="text-3xl/10 font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-purple-400 border-0 hover:bg-pink-600 ">Login</button>
        </div>
        <p>Don't have an account ? <Link to="/register" className='text-pink-400'>Create an Account</Link></p>
      </div>
    </div>
  </div>
      </div>
    
<div>
<Button></Button>
</div>
 
</div>
   );
};

export default Login;