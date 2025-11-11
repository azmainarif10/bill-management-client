import React, { useEffect } from 'react';
import { Link } from 'react-router';

import 'aos/dist/aos.css';
 import AOS from 'aos';
import useLatest from '../Utils/latestBill';


const Card = () => {
     const latests = useLatest()

    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            once: true, 
            easing: 'ease-in-out', 
        });
    }, []);


    return (
        <div>
            <div className='lg:px-40 lg:py-20'>
                <div data-aos="fade-up" className='grid grid-cols-1 gap-4  md:grid-cols-2 lg:gap-y-32 lg:gap-x-8'>
                    {latests.map((latest, index) => {
                        const isOddIndex = index % 2 !== 0;
                        const aosEffect = isOddIndex ? "fade-up" : "flip-left";
                        const offsetClass = isOddIndex ? "lg:mt-40" : "";
                        
                        return (
                            <div 
               key={latest._id || index} 
             data-aos={aosEffect}
             className={`lg:h-[30vh] ${offsetClass}`}
                            >
         <div className="hero  bg-violet-200 dark:bg-base-200  rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img 
          src={latest.image} 
         alt={latest.title}
         className="lg:w-52 lg:h-72 rounded-lg shadow-2xl object-cover" 
                                        />
                                        
         <div>
         <h1 className="text-xl font-bold  text-gray-800 dark:text-gray-200">{latest.title}!</h1>
         <p className="py-2 text-gray-800 dark:text-gray-200"> Category : {latest.category}</p>
        <p className="py-2  text-gray-800 dark:text-gray-200 "> Location: {latest.location}</p>
         <p className="py-2   text-gray-800 dark:text-gray-200"> Date :{latest.date}</p>
                                            
        <Link to={`/bill-detail/${latest._id}`}>
         <button className="btn bg-violet-400 text-white hover:bg-violet-500">
            See Details
          </button>
             </Link>
                </div>
                </div>
              </div>
            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;