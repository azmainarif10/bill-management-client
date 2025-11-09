import React from 'react';
import useDetail from '../Utils/details';
import { Loader } from 'lucide-react';

const BillDetail = () => {

 const detail = useDetail()


   if(!detail){
    return <Loader></Loader>
   }
    return (
        <div>
             
    
        <div className="card lg:card-side bg-base-100 gap-6 mt-5 ml-5 shadow-sm">
          <figure className='w-96 h-96 overflow-hidden rounded-xl'>
            <img
              src={detail.image}
              alt="Album"
              className='w-full h-full object-cover'
            />
          </figure>

          <div className="space-y-2 mt-4 ">
            <h2 className="card-title font-bold text-2xl">
              {detail.title}
            </h2>

<div className='flex flex-col justify-center items-center mt-5'>
               <div className='mt-5'>
              <p className="text-gray-800  text-xl">
                Category: {detail.category}
              </p>

            <p className="text-gray-800 text-lg">
              Lesson Price : {detail.amount}
            </p>

            <p className="text-gray-800 text-lg">
              Location : {detail.location}
            </p>

            <p className="text-gray-800 text-lg">
              Date: {detail.date}
            </p>

            <p className="text-gray-800 text-lg">
              Details: {detail.description}
            </p>


          

              <p className="text-gray-800 text-lg mt-2.5">
                 Email:{detail.email}

              </p>
     <button className='btn btn-wide mt-4 bg-violet-500 text-white'>Pay Bill</button>

               </div>
            </div>
          </div>
        </div>
      
    
  

 
   
</div>
    
    );
};

export default BillDetail;