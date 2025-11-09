import React from 'react';
import Lottie from "lottie-react";
import Loading from "../Utils/Loading.json";

const Loader = () => {
    return (
        <div>
            <div className='flex min-h-screen justify-center items-center'>
                <span className="loading loading-infinity loading-xl"></span>
                 <Lottie animationData={Loading} loop={true} />;
            </div>
        </div>
    );
};

export default Loader;