
import React from 'react';

import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, CreditCardIcon } from '@heroicons/react/24/solid'; 
import { Link } from 'react-router';



const IllustratedCard = () => {
  return (
    <div className="relative w-full max-w-sm h-[320px]"> 
      <div className="absolute w-60 h-60 bg-teal-400/20 opacity-50 rounded-full blur-3xl transform -rotate-12 top-10 left-0 -translate-x-1/4"></div>
      <div className="absolute w-40 h-40 bg-indigo-400/20 opacity-50 rounded-full blur-3xl transform rotate-45 bottom-20 right-0 translate-x-1/4"></div>
      <div className="absolute w-32 h-32 bg-orange-400/20 opacity-50 rounded-full blur-3xl transform -rotate-45 top-0 right-0 translate-x-1/4"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 bg-white p-6 rounded-xl shadow-2xl relative">
          
          <div className="absolute -top-10 right-0 transform translate-x-1/4">
            <div className="bg-gradient-to-tr from-green-100 to-white p-4 rounded-xl shadow-xl border border-green-500/50 flex items-center">
              <ShieldCheckIcon className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-800 font-bold text-sm">SECURE PAYMENT</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">Payment Flow</h2>

          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                <CheckIcon className="w-4 h-4 text-green-700" />
              </div>
              <div className="flex-grow">
                <p className="text-sm font-semibold text-gray-800">1. View Details</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-gray-800 font-bold mr-3">
                2
              </div>
              <div className="flex-grow">
                <p className="text-sm font-semibold text-indigo-600">2. Click on pay bill</p>
                <div className="h-8 border border-indigo-400/50 bg-indigo-50 rounded-lg w-full mt-1 flex items-center px-2">
                    <CreditCardIcon className="w-4 h-4 text-indigo-500 mr-2" />
                    <span className="text-sm text-indigo-700">Fill up Card...</span>
                </div>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full text-gray-500 bg-gray-100 flex items-center justify-center mr-3">
                3
              </div>
              <div className="flex-grow space-y-1">
                <p className="text-sm text-gray-500">3. Download Bill Report </p>
                <div className="h-6 border-b border-gray-300/50 rounded-sm w-full"></div>
              </div>
            </li>
          </ul>
          
        <Link to={"/bills"}>  <button className="mt-6 w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg">
            <ArrowRightIcon className="w-5 h-5 mr-2" />
            Proceed to Bills
          </button></Link>
        </div>
      </div>
    </div>
  );
};


const BillSection = () => {
  return (
    <div className=" bg-violet-100 dark:bg-base-200 text-gray-900 p-8 md:p-16 pb-20 relative overflow-hidden">
      
     
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-4 md:pt-20 max-w-7xl mx-auto">
        
       
        <div className="w-full md:w-1/2 mb-10 md:mb-0"> 
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-500">
            Pay your Bills 
          </h1>
          <p className="text-xl text-gray-600">
            It's safe, secure, and only takes three quick steps. 
          </p>
          <p className="text-lg mt-4 text-gray-500">
            <CreditCardIcon className="w-5 h-5 inline mr-2 text-indigo-500" />
            Your payment information is always encrypted.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <IllustratedCard />
        </div>
      </div>
    </div>
  );
};

export default BillSection;