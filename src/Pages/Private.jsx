import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Load from '../Components/Load';

const Private = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()

     if(loading){
        return <Load></Load>
     }

    if(user){
        return children
    }

        return <Navigate state={location.pathname} to="/login" ></Navigate>
    

};

export default Private;