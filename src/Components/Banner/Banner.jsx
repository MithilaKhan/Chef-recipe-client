import React from 'react';
import "./Banner.css"
const Banner = () => {
   return (
      <div className='bannerBgImg grid lg:grid-cols-2 sm:grid-cols-1'>

         {/* title */}
         <div className='grid text-5xl text-center my-auto gap-y-4'>
         <h1 className='   font-bold text-pink-600'>Fresh </h1>
         <p className=' text-purple-700  pt-6   font-bold'>Healthy & Traditional</p>
         <p className= "font-bold pt-6 text-pink-600">Bengali Food</p> 
         </div>


         <div className='my-auto p-24 '>
      <img src="https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?w=996&t=st=1683043787~exp=1683044387~hmac=da27152edf91b8f946ee27ed18a5908e0077b5a79ee1ea920b3927222d06e231" alt="" className='rounded-lg' />
         </div>
      </div>
   );
};

export default Banner;