import React, {  useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import FoodItems from '../Components/FoodItems';
import Chef from '../Components/Chef/Chef';

const Home = () => {
   const [chefs , setChefs] = useState([])

   useEffect(()=>{
      fetch('https://chef-recipe-hunter-server-side-mithilakhan.vercel.app/chef')
      .then(res => res.json())
      .then(data => setChefs(data))
   } ,[])
   return (
      <div>
         <Banner/>
          {/* categories  */}
          <div className='text-center pt-20 pb-14 '>
          <p className='italic text-purple-600 text-xl'>Choose A Category</p>
         <h1 className='text-pink-500 text-4xl  font-bold'>Recipe Categories</h1>
          </div>
          <Categories/>
          <div className='text-center pt-16 pb-14'>
          <p className='italic  text-purple-500 text-xl'>Our Delicious & </p>
         <h1 className='text-pink-500 text-4xl  font-bold'>Famous Food Items</h1>
          </div>
          <FoodItems/>

          <div className='text-center pt-16 pb-14'>
          <p className='italic  text-purple-500 text-xl'>Our Delicious & </p>
         <h1 className='text-pink-500 text-4xl  font-bold'>Chefs</h1>
          </div>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 justify-items-center'>
            {
               chefs.map(chef =><Chef
               key={chef.id}
               chef={chef}
               ></Chef>)
            }
          </div>
         
      </div>
   );
};

export default Home;