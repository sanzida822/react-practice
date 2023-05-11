import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading,userr}=useContext(AuthContext)

    const location=useLocation();
    console.log(location)
    if(loading){
        return <div>loading...</div>
    }


    if(userr){
        return children
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>
  
    
};

export default PrivateRoute;