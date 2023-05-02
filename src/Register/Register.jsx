import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button.jsx';

const Register = () => {
   return (
      <div className='lg:mt-16 lg:mb-14'>
 <div className="hero ">
  <div className="hero-content  ">
    <div className="card  w-full  shadow-2xl ">
    
      <div className="card-body w-96 ">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text">Create An Account</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder=" Name" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="Photo URL" className="input input-bordered" />
        </div>

       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          </div>
       
        <div className="form-control mt-6">
          <button className="btn  bg-pink-400 border-0 hover:bg-purple-600 ">Create an Account</button>
        </div>
        <p>Already have an account ? <Link to="/login" className='text-purple-400'>Login</Link></p>
      </div>
    </div>
  </div>
      </div>
      <Button/>
     
</div>
   );
};

export default Register;