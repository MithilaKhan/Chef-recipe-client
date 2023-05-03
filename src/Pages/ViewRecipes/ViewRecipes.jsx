import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./ViewRecipes.css"
const ViewRecipes = () => {
   const recipes = useLoaderData();
   // const [viewRecipes , setViewRecipes] =useState
   console.log(recipes)
   return (
      <div>
         {/* view Recipes Banner  */}
         <div className='ViewRecipeBanner'>
            {/* {
               recipes.find((id))
            } */}
         </div>
      </div>
   );
};

export default ViewRecipes;