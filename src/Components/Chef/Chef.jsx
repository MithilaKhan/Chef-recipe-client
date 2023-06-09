import React from 'react';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';



const Chef = ({chef}) => {
   const { chef_picture ,chef_name,id, years_of_experience ,number_of_recipes ,likes} =chef
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10" src="iframe" loading="lazy">
    <img src={chef_picture} alt="Image Alt" loading="lazy" className="rounded-xl w-60 h-52" />
    
    {/* <LazyLoadImage
    alt={chef_picture.alt}
    effect="blur"
    src={chef_picture.src} /> */}
  </figure>
  <div className="card-body ">
  <h2 className="card-title text-pink-600 ps-5 text-3xl justify-items-center  text-center font-semibold">{chef_name}</h2>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Years of Experience : </span> {years_of_experience} Years</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Number of recipes :</span>  {number_of_recipes}</p>
    <p className='text-pink-600 '><span className='text-purple-500 font-medium'>likes : </span> {likes}  </p>
    <div className="card-actions">
    <Link to={`/viewRecipes/${id}`}><button className='btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 ps-8 pe-8'>View Recipes</button>  </Link>
    </div>
  </div>
</div>
      </div>
   );
};

export default Chef;