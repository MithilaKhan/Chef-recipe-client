import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Home/Home.jsx';
import Navbar from './Shared/Navbar.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import ErrorPage from './Components/Error-Page.jsx';
import Blog from './Pages/Blog.jsx';
import ViewRecipes from './Pages/ViewRecipes/ViewRecipes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/viewRecipes/:id" ,
        element: <PrivateRoute> <ViewRecipes/> </PrivateRoute> ,
        loader:({params}) => fetch(`https://chef-recipe-hunter-server-side-mithilakhan.vercel.app/chef/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    
  </React.StrictMode>,
)
