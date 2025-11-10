import React, { use, useRef } from 'react';
import useDetail from '../Utils/details';
import { Loader } from 'lucide-react';
import { AuthContext } from './AuthContext';
import useAxios from '../Utils/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const BillDetail = () => {
  const modalRef =useRef()
 const detail = useDetail()
 const {user} = use(AuthContext)
 const instance = useAxios()
 const currentDate=  new Date()
    const navigate = useNavigate()   
    const date = currentDate.toLocaleDateString("en-US",{
  
   month:"numeric",
    day:"numeric",
    year:"numeric"
    })

 if(!detail){
    return <Loader></Loader>
   }

    function handleModal(){
       modalRef.current.showModal()

    }

   async function handleSubmit(e){
      e.preventDefault()
      const username = e.target.username.value;
      const phone = e.target.phone.value;
      const address = e.target.address.value;
      const additionalInfo = e.target.additionalInfo.value;

      const myBills ={
        username,
        phone,
        address,
        additionalInfo,
        email:user.email,
         date,
         amount:detail.amount,
      }

    try{
       await instance.post("/my-bills",myBills)
      toast.success('Payment successful! Your bill has been saved.')

        modalRef.current.close()
         navigate("/bills")
    } catch(error){
      toast.error(error.code);
    } 
      
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
     <button onClick={()=>{handleModal()}} className='btn btn-wide mt-4 bg-violet-500 text-white'>Pay Bill</button>

               </div>
            </div>
          </div>
        </div>
      
    <dialog  ref={modalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-violet-400 border-b pb-2">
        💳 Pay Bill 
      </h2>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="space-y-6">

     
           
  <div key="email">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      id="email"
      type="text"
      value={user.email}
      readOnly
      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-3 text-sm text-gray-600 cursor-not-allowed"
    />
  </div>

  <div key="billId">
    <label htmlFor="billId" className="block text-sm font-medium text-gray-700">
      Bill ID
    </label>
    <input
      id="billId"
      type="text"
      value={detail._id}
      readOnly
      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-3 text-sm text-gray-600 cursor-not-allowed"
    />
  </div>

  <div key="amount">
    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
      Amount
    </label>
    <input
      id="amount"
      type="text"
      value={detail.amount}
      readOnly
      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-3 text-sm text-gray-600 cursor-not-allowed"
    />
  </div>
  <div key="amount">
    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
      Date
    </label>
    <input
      id="amount"
      type="text"
      value={date}
      readOnly
      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-3 text-sm text-gray-600 cursor-not-allowed"
    />
  </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            name="username"
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            name="address"
            type="text"
           
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
           
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
            Additional Info (Optional)
          </label>
          <textarea
            name="additionalInfo"
            rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-400 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
          >
            Confirm and Pay
          </button>
        </div>
      </form>
    </div>
  </div>
</dialog>
  

 
   
</div>
    
    );
};

export default BillDetail;