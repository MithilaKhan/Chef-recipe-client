import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider.jsx';

const Register = () => {
const {register , updateProfilePhotoAndName ,user } = useContext(AuthContext)
const [error , setError] = useState("")

  const handleRegister =(event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value 
    const name = form.name.value 
    const photo = form.photo.value
    const password = form.password.value 
    console.log(email ,photo , name ,password)

    if(password.length < 6){
      setError("password should be 6 character")
      return;
    } 
// register auth 
    register(email , password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      updatePhotoName(loggedUser,name,photo)
      form.reset()
    })
    .catch((error) =>{
      const errorMessage = error.message;
      console.log(errorMessage)
      setError(errorMessage)
    })
    // update profile photo url and name 
    const updatePhotoName = (currentUser, name, photo) =>{
      updateProfilePhotoAndName(currentUser,name ,photo)
      .then(result =>{
        const loggedUser = result
        console.log(loggedUser)
       
      })
      .catch((error) =>{
        console.log(error.message)
        setError(error.message)
      })

    }

  } 
   return (
      <div className='lg:mt-16 lg:mb-14'>
 <div className="hero ">
  <div className="hero-content  ">
    <div className="card  w-full  shadow-2xl ">
    
      <form onSubmit={handleRegister} className="card-body w-96 ">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text">Create An Account</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder=" Name" className="input input-bordered" required/>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
        </div>

       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          </div>
       
        <div className="form-control mt-6">
          <button className="btn  bg-pink-400 border-0 hover:bg-purple-600 ">Create an Account</button>
        </div>
        <p className='text-red-500'>{error}</p>
        <p>Already have an account ? <Link to="/login" className='text-purple-400'>Login</Link></p>
      </form>
    </div>
  </div>
      </div>
      
     
</div>
   );
};

export default Register;