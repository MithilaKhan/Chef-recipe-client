import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider.jsx";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config.js";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setError("password should be 6 character");
      return;
    }
    // login auth
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };
  // google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // github sign in
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="lg:mt-16 lg:mb-14 ">
      <div className="hero  ">
        <div className="hero-content  ">
          <div className="card  w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body w-96">
              <h1 className="text-3xl/10 font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-purple-400 border-0 hover:bg-pink-600 ">
                  Login
                </button>
              </div>
              <p className="text-red-500">{error}</p>
              <p>
                Don't have an account ?{" "}
                <Link to="/register" className="text-pink-400">
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 mb-5"
        >
          <FaGoogle />{" "}
          <span className="text-black ps-3 font-bold">
            Continue With google
          </span>{" "}
        </button>
        <br />
        <button
          onClick={handleGithubSignIn}
          className="btn bg-gradient-to-br from-purple-600  to-pink-600 border-0"
        >
          {" "}
          <FaGithub />{" "}
          <span className="text-black ps-3 font-bold">
            {" "}
            Continue With Github
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
