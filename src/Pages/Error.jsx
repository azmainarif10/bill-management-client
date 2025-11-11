import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <title>Error</title>
             <div className='flex justify-center items-center mt-8'
                  >
              
                <img 
                 src="/error-404.png" alt="" />
             </div>
           
              <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>Oops, page not found!</p>
    <p className=' mt-3 font-[Inter] text-[20px] font-normal text-gray-500 text-center'>The page you are looking for is not available.</p>
           <div className='flex justify-center items-center'>
             <Link to={'/'} >  <button className='  mt-5 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Go Back</button></Link>
           </div>
        </div>
    );
};

export default Error;