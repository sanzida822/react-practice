import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop.jsx';
import Home from './Components/Home/Home.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';
import CartProductLoader from './Loader/CartProductLoader.js';
import Checkout from './Components/Checkout/Checkout.jsx';
import Signup from './Components/Signup/Signup.jsx';
import AuthProviders from './Components/Providers/AuthProviders.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:"orders",
        element:<Orders></Orders>,
        loader:CartProductLoader
      },
      {
        path:"checkout",
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path:"inventory/",
        element:<Inventory></Inventory>
      },
      {
        path:"signup",
        element:<Signup></Signup>
      },
      {
        path:"login",
        element:<Login></Login>
      }


    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>    <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
)
