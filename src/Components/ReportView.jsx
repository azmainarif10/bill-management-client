import React from 'react';

const ReportView = ({ myBills}) => {

    if (!myBills || myBills.length === 0) {
        return null; 
    }

    return (
        <div className="mt-8 mb-4">
            <h3 className="text-2xl font-bold text-center text-violet-400 mb-6 border-b pb-2">
                Recently Paid Bills Summary
            </h3>
            
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-h-[500px] overflow-y-auto border border-violet-100 rounded-lg">
                
                {myBills.map((bill) => ( 
                    <div 
                        key={bill._id} 
                        className="bg-white border border-violet-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                    >
                        <div className="p-4 flex items-center gap-4">
                            <div className="w-60 h-40 rounded-lg overflow-hidden ">
                                <img
                                    src={bill?.image || 'https://i.ibb.co.com/gL19M6xH/icon-7797704-640.png'}
                                    alt="Bill Icon"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col ">
                                <span className="text-xl font-medium text-gray-500">Paid Amount:</span>
                                <span className="text-lg font-extrabold text-violet-400">
                                    {bill.amount}
                                </span>
                                <span className="text-lg font-medium text-gray-500 mt-1">
                                    on {bill.date}
                                </span>
                                <span className="text-lg font-medium text-gray-500 truncate">
                                    By {bill.username}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
           
        </div>
    );
};

export default ReportView;