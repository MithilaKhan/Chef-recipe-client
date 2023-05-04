import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./ViewRecipes.css"
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { ToastContainer } from 'react-toastify';
const ViewRecipes = () => {
   const recipe = useLoaderData();
   const {chef_name ,id , chef_picture ,description,likes ,years_of_experience,recipes ,number_of_recipes} = recipe
   // const [viewRecipes , setViewRecipes] =useState
   console.log(recipe)
   return (
      <div>
         {/* view Recipes Banner  */}
         <div className='ViewRecipeBanner grid lg:grid-cols-2 sm:grid-cols-1'>
<div className='grid grid-cols-1 my-auto '>
<h1 className='text-center font-bold text-3xl p-3 text-purple-600'>{chef_name}</h1>
<p className='text-pink-800 ps-4 text-xl'>{description}</p>
<p className='text-pink-800 ps-4 pt-2 text-xl'> <span className='font-semibold text-purple-600'>Experience :</span> {years_of_experience}</p>
<p className='text-pink-800 ps-4 pt-2 text-xl'> <span className='font-semibold text-purple-600'>Number of Recipes :</span> {number_of_recipes}</p>
<p className='text-pink-800 ps-4 pt-2 text-xl'> <span className='font-semibold text-purple-600'>Likes :</span> {likes}</p>
</div>

<div className='lg:p-20 justify-items-center '>
<img src={chef_picture} alt="" className='rounded-lg  w-96 h-72' />
</div>
</div>


<div>
<h1 className='text-center mt-20 font-bold italic text-3xl text-pink-600'>The Delicious Recipe by {chef_name}</h1>
<ToastContainer/>
</div>
<div className='grid lg:grid-cols-3 sm:grid-cols-1 g-3 mt-10'>
{
   recipe.recipes.map(recipeCard=> <RecipeCard
   key={recipeCard.id}
   recipeCard={recipeCard}
   ></RecipeCard>)
}
</div>
         </div>
      
   );
};

export default ViewRecipes;