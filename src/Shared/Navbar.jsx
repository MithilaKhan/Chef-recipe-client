import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from '../Components/ActiveLink/ActiveLink';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
   console.log('environment variable',import.meta.env.VITE_apiKey);

   const{user , logOut} =useContext(AuthContext)
   const [showName ,setShowName] = useState(false)
   console.log(user)


//  signOut 
const handleLogOut =() =>{
  logOut()
.then(() => {
  })
.catch((error) => {
  
});
   }
  

   return (
      <div className="navbar bg-gray-100  lg:items-center ">
  <div className="navbar-start lg:ms-20 lg:mt-5 ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><ActiveLink className=' font-semibold text-pink-500' to="/">Home </ActiveLink ></li>
        <li><ActiveLink className=' font-semibold text-pink-500' to="/blog">Blog</ActiveLink ></li>
        <li><ActiveLink className=' font-semibold text-pink-500' to="/gallery">Gallery</ActiveLink ></li>
        <li><ActiveLink className=' font-semibold text-pink-500' to="/contact">Contact Us</ActiveLink ></li>
        {/* <Link className='w-full relative'></Link> */}
        <Link className=" flex items-center gap-6"
              onMouseEnter={() => setShowName(true)} // Show name on hover
              onMouseLeave={() => setShowName(false)} // Hide name on mouse leave
            >
              <div className=" w-full relative">
                {user && (
                  <img className=" w-12 rounded-full" src={user.photoURL} alt="" />
                )}
                {showName && user && ( // Only show name when hovering over picture and user exists
                  <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
                    {user.displayName}
                  </div>
                )}
              </div>
              {user ? (
                <div>
                  <Link onClick={handleLogOut} variant="secondary">
                    Logout
                  </Link>
                </div>
              ) : (
                <ActiveLink to="/login">
                  Login
                </ActiveLink>
              )}
            </Link>
        
      </ul>
    </div>
   <h1 className=' text-4xl/loose italic hover:not-italic font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text lg:pt-0 '>TastyFood</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center">
      <p className='lg:pe-14 font-semibold text-pink-500'><ActiveLink  to="/">Home </ActiveLink></p>
      <p className='lg:pe-14 font-semibold text-pink-500'><ActiveLink  to="/blog">Blog</ActiveLink></p>
      <p className='lg:pe-14 font-semibold text-pink-500'><ActiveLink  to="/gallery" >Gallery</ActiveLink></p>
      <p className='font-semibold text-pink-500 me-8'><ActiveLink  to="/contact">Contact Us</ActiveLink></p>
      <Link className=" flex items-center gap-6"
              onMouseEnter={() => setShowName(true)} // Show name on hover
              onMouseLeave={() => setShowName(false)} // Hide name on mouse leave
            >
              <div className=" w-full relative">
                {user && (
                  <img className=" w-12 rounded-full" src={user.photoURL} alt="" />
                )}
                {showName && user && ( // Only show name when hovering over picture and user exists
                  <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
                    {user.displayName}
                  </div>
                )}
              </div>
              {user ? (
                <div>
                  <Link onClick={handleLogOut} variant="secondary">
                    Logout
                  </Link>
                </div>
              ) : (
                <ActiveLink to="/login">
                  Login
                </ActiveLink>
              )}
            </Link>
      
    </ul>
  </div>
  <div className="navbar-end lg:me-24 ">
   <Link to="/login"><button className='btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 ps-8 pe-8'>Login</button></Link>
    
  </div>
</div>
   );
};

export default Navbar;