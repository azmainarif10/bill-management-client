import React from 'react';

const utilityData = [
  {
    name: 'Electricity',
    image: 'https://i.ibb.co.com/NddHQc9w/header-articles-11-2.webp', 
    description: 'Manage your monthly electricity usage, view bills, and track consumption history.',
    price: 'Varies',
  },
  {
    name: 'Gas',
    image: 'https://i.ibb.co.com/99jxJbKF/istockphoto-874376258-612x612.jpg', 
    description: 'Monitor your natural gas consumption and get alerts for potential leaks or spikes.',
    price: 'Varies',
  },
  {
    name: 'Water',
    image: 'https://i.ibb.co.com/8nm29wT5/Blue-Ocean-1.webp', 
    description: 'Track your water usage, identify leaks, and view detailed billing information.',
    price: 'Varies',
  },
  {
    name: 'Internet',
    image: 'https://i.ibb.co.com/WWx63Hk5/images.jpg', 
    description: 'Review your internet plan details, check data usage, and manage your connection.',
    price: 'Fixed Rate',
  },
];

const UtilityCard = ({ utility }) => (
  <div className="bg-white rounded-3xl shadow-lg p-3 w-64 flex flex-col items-start transition duration-300 ease-in-out hover:shadow-xl">
    <div className="w-full h-40 bg-violet-100 rounded-2xl mb-3 overflow-hidden">
      <img 
        src={utility.image} 
        alt={`${utility.name} service illustration`}
        className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="p-2 w-full">
      <p className="text-xs font-semibold uppercase text-violet-300 tracking-wider mb-1">
        Utility Service
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {utility.name}
      </h3>
      
      <p className="text-sm text-gray-500 mb-4 line-clamp-3 h-14">
        {utility.description}
      </p>

      <div className="text-xs text-gray-400 mb-4 space-y-1">
        <p>• Billing Cycle: Monthly</p>
        <p>• Avg. Usage: Tracked</p>
        <p>• Status: Active</p>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-violet-100">
        <span className="text-2xl font-bold text-gray-800">
          {utility.price}
        </span>
        <button className="bg-violet-300 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-100 transition duration-150">
          <span className="text-2xl font-light leading-none">+</span>
        </button>
      </div>
    </div>
  </div>
);

const UtilityCategoryCards = () => {
  return (
    <div className="p-10 bg-violet-50 min-h-screen">
      
      <h1 className="text-6xl font-extrabold text-gray-800 mb-10">
        Utilities
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {utilityData.map((utility) => (
          <UtilityCard key={utility.name} utility={utility} />
        ))}
      </div>
    </div>
  );
};

export default UtilityCategoryCards;