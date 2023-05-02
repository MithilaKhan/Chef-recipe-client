import React from 'react';
import {  FaGithub, FaGoogle  } from "react-icons/fa";
const Button = () => {
   return (
      <div className='text-center mt-12'>
         <button className="btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 mb-5"><FaGoogle/> <span className='text-black ps-3 font-bold'>Continue With google</span> </button>
         <br />
  <button className="btn bg-gradient-to-br from-purple-600  to-pink-600 border-0"> <FaGithub/> <span className='text-black ps-3 font-bold'> Continue With Github</span></button>
      </div>
   );
};

export default Button;