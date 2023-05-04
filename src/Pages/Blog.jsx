import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
   return (

      <div>
         
  <div className='font-bold text-4xl text-center pt-10 text-pink-600'>Questions & Answers </div>
<div className='grid lg:grid-cols-2 sm:grid-cols-1 p-24' ref={ref}>
         <div className='grid grid-cols-1'>
<h1  className='mb-6'>
   <p className='text-purple-500 font-semibold text-2xl'><span className='text-pink-700 '>Q.</span>What is  the difference between  uncontrolled  and controlled components ??</p>
   <p className='text-pink-500'><span className='text-purple-700 font-semibold text-xl'>Ans.</span> Controlled Components value of an input or form element is controlled by parent components . parent components pass the value as a prop.
   On the other hand , Uncontrolled Components manage their own state internally using the dom</p>
</h1>


<h1 className='mb-6'>
   <p className='text-purple-500 font-semibold text-2xl '><span className='text-pink-700 '>Q.</span>How to validate React props using propsType ??</p>
   <p className='text-pink-500'><span className='text-purple-700 font-semibold text-xl'>Ans.</span>To validate React props using propTypes,  define the prop types in component using the propTypes object. The propTypes object is imported from the 'prop-types' package</p>
</h1>


<h1  className='mb-6'>
   <p className='text-purple-500 font-semibold text-2xl'><span className='text-pink-700 '>Q.</span>What is  the difference between  nodeJs and expressJs ??</p>
   <p className='text-pink-500'><span className='text-purple-700 font-semibold text-xl'>Ans.</span> Node.js is allows developers to build server-side applications using JavaScript.Express.js is a web application framework built on top of Node.js.  </p>
</h1>


<h1  className=''>
   <p className='text-purple-500 font-semibold text-2xl'><span className='text-pink-700 '>Q.</span>What is a Custom hook and why will we create a custom hook ??</p>
   <p className='text-pink-500'><span className='text-purple-700 font-semibold text-xl'>Ans.</span>custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components.Custom hooks are a powerful tool in React that can help you create more reusable and maintainable code.</p>
</h1>
         </div>

         <div className='grid grid-cols-1'>
<img src="https://img.freepik.com/free-vector/flat-people-asking-questions_23-2148919346.jpg?w=740&t=st=1683077353~exp=1683077953~hmac=c4c523972ab8fad2fc65af245bc58a41537dfecb0c303cfcc6775c083396189d" alt="" />
         </div>
      </div>
      <div className='text-center lg:mb-12'>
      <Pdf targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='bg-pink-500 p-4 text-center rounded-lg'>Generate Pdf</button>}
      </Pdf>
      </div>
      
      </div>
      
   );
};

export default Blog;