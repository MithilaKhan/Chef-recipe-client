import React from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import FoodItems from '../Components/FoodItems';

const Home = () => {
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
      </div>
   );
};

export default Home;