import React from 'react';

const Navbar = () => {
   console.log('environment variable',import.meta.env.VITE_apiKey);
   return (
      <div>
         this is navbar
      </div>
   );
};

export default Navbar;