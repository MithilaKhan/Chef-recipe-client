import React from 'react';

const FoodItems = () => {
   return (
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center mb-16'>
         <div className="card w-96 bg-base-100 shadow-xl mb-16">
  <div className="card-body">
    <h2 className="card-title text-purple-600 ps-5 text-3xl  text-center font-semibold">Vaja Mach</h2>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Ingredient : </span>500g telapiya , vegetable oil , to Glaze Flour , Dash Salt</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Cooking Method :</span> Wash the fish under the cold tap.Roll in the flour and deep fry in oil until crispy.Lay  on kitchen towel to get rid of the excess oil and serve hot or cold with a slice of lemon.</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Rating :</span> 4.9 out of 5</p>
  </div>
  <figure><img  src="https://img.freepik.com/free-photo/fried-fish-with-potatoes-furnace-board_140725-1356.jpg?w=996&t=st=1683068848~exp=1683069448~hmac=8188b4a1f5e0bc08d34d76afe2e589d56e74836b7721f4ffd3af4dcccf8139af" alt="Shoes" /></figure>
</div>


<div className="card w-96 bg-base-100 shadow-xl mb-16">
  <div className="card-body">
    <h2 className="card-title  text-purple-600 ps-5 text-3xl font-semibold">Rasmalai</h2>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Ingredient :</span> Milk, lemon juice, sugar, water, and cardamom.</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Cooking Method :</span> Boil milk, curdle with lemon juice, strain, form into small balls, boil in sugar syrup with cardamom and water.</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Rating :</span> 5 out of 5 </p>
 </div>
  <figure><img src="https://img.freepik.com/premium-photo/angoori-rasmalai-is-indian-dessert-sweet-with-dry-fruits-saffron-toppings-served-bowl-moody-background-selective-focus_466689-72204.jpg?w=996" alt="Shoes" /></figure>
</div>


<div className="card w-96 bg-base-100 shadow-xl mb-16">
  <div className="card-body">
    <h2 className="card-title text-purple-600 ps-5 text-3xl font-semibold">Buna Khichuri</h2>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Ingredient :</span> Rice, Lentils, Onion, Ginger, Cumin, Turmeric, Salt, Water</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Cooking Method :</span> Cook all ingredients together in a pressure cooker until soft and mushy, then temper with fried onions and ghee.</p>
    <p className='text-pink-600'><span className='text-purple-500 font-medium'>Rating :</span> 4.8 out of 5</p>
</div>
  <figure><img src="https://img.freepik.com/premium-photo/traditional-azian-pilaf-served-plate-gray-background_130040-3493.jpg?w=996" alt="Shoes" /></figure>
</div>

         
      </div>
   );
};

export default FoodItems;