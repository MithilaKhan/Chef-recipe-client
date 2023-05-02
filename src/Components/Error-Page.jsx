import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
<div className="text-center text-red-600 font-bold text-2xl mx-auto lg:mt-32" id="error-page">
      <img className="mx-auto w-100 h-80" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?w=996&t=st=1683019411~exp=1683020011~hmac=c51e115d57bb4009c6c0378fe9f07704aea9027b4293c7747df2ba46a887c051" alt="" />
      <h1>Oops!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-6">
        <i>{error.statusText || error.message}</i>

      </p>
      <Link  to="/"><button className='btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 ps-8 pe-8'>Back to Home</button></Link>
    </div>

    </div>
    
  );
}