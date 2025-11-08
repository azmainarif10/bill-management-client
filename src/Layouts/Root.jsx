import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
  import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                    <Navbar></Navbar>
                <div className='flex-1 '>
                    <Outlet></Outlet>
                    
                <ToastContainer />

              
                </div>
            </div>
             
        </div>
    );
};

export default Root;