import React from 'react';

const RecipeCard = ({recipeCard}) => {
   const {cooking_method ,recipe_name , ingredients , rating}= recipeCard
   console.log(recipeCard)
   return (
      <div className="card m-10 bg-gradient-to-br from-pink-200  to-purple-200 grid-cols-1 w-92 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title ps-20 text-center text-purple-700 text-2xl">{recipe_name}</h2>
<p className='text-pink-800  text-xl'> <span className='font-semibold text-purple-600'>Cooking Method :</span> {cooking_method}</p>
<p className='text-pink-800  text-xl'> <span className='font-semibold text-purple-600'>Ingredients :</span> {ingredients[0]}</p>
<p className='text-pink-800  text-xl'> <span className='font-semibold text-purple-600'>Rating :</span> {rating}</p>
    <div className="card-actions justify-center">
    <button onClick={handleFavorite} className='btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 ps-8 pe-8'>Favorite</button>
    </div>
  </div>
</div>
   );
};

export default RecipeCard;