import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Button from '../Components/Button.jsx';
import { AuthContext } from '../Provider/AuthProvider.jsx';

const Login = () => {
  const {login} = useContext(AuthContext)
  const [error , setError] = useState("")
  let location = useLocation();
  console.log(location)
  let from = location.state?.from?.pathname || "/";
  
  const  handleLogin =(event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value 
    const password = form.password.value 
    console.log(email ,password)

    if(password.length < 6){
      setError("password should be 6 character")
    }
// login auth 
    login(email , password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      Navigate(from, { replace: true });
    })
    .catch((error) =>{
      const errorMessage = error.message;
      console.log(errorMessage)
      setError(errorMessage)
    })
  } 
   return (
      <div className='lg:mt-16 lg:mb-14 '>
 <div className="hero  ">
  <div className="hero-content  ">
    <div className="card  w-full max-w-sm shadow-2xl ">
    
      <form onSubmit={handleLogin} className="card-body w-96">
      <h1 className="text-3xl/10 font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-purple-400 border-0 hover:bg-pink-600 ">Login</button>
        </div>
        <p className='text-red-500'>{error}</p>
        <p>Don't have an account ? <Link to="/register" className='text-pink-400'>Create an Account</Link></p>
      </form>
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