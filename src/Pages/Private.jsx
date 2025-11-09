import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import Loader from '../Components/Loading';

const Private = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()

     if(loading){
        return <Loader></Loader>
     }

    if(user){
        return children
    }

        return <Navigate state={location.pathname} to="/login" ></Navigate>
    

};

export default Private;