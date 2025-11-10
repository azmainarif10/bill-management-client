import React, { use, useRef, useState } from 'react';
import useMyBills from '../Utils/myBills';
import { AuthContext } from './AuthContext';
import useAxios from '../Utils/axios';
import { toast } from 'react-toastify';

const MyBill = () => {
    const instance = useAxios()
    const [selectedBill,setSelectedBill]= useState(null)
    const modalRef = useRef()
    const {user} = use(AuthContext)
    const {myBills,setMyBills} = useMyBills()
    const totalAmount = myBills.reduce((sum, bill) => sum + Number(bill.amount), 0);
  function handleModal(){
       modalRef.current.showModal()
       
  }
  function handleUpdate(e){
    e.preventDefault()
    const updated ={
      amount:selectedBill.amount,
      date :selectedBill.date,
      phone:selectedBill.phone,
      address:selectedBill.address,
    }
    instance.put(`/my-bills/update/${selectedBill._id}`,updated)
    .then(()=>{

      const uiUpdate = myBills.map(bill => bill._id === selectedBill._id ? {...bill,...updated} : bill )
        setMyBills(uiUpdate)
    toast.success('Bill update successful! Your bill update has been saved.')
    
    modalRef.current.close()
   })
   .catch(() => toast("Update failed!"));
  }
    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>
          Serial No:
        </th>
        <th>Name</th>
        <th>Address</th>
        <th>Amount</th>
        <th>Personal Info</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        myBills.map((mybill,index)=>

         <tr key={mybill._id}>
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                   src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold opacity-80">{mybill.username}</div>
            </div>
          </div>
        </td>
        <td>
         {mybill.address}
          <br />
          <span className="badge badge-ghost badge-sm">{mybill.date}</span>
        </td>


        <td>{mybill.amount}</td>
        <td>{mybill.email}
           <br />
          <span className="badge badge-ghost badge-sm">{mybill.phone}</span>
        </td>
        <th className='flex gap-5'>
          <button onClick={()=>{ setSelectedBill(mybill);
                                 handleModal()}} className="btn bg-violet-400 text-white btn-xs">Update</button>
          <button className="btn bg-violet-400 text-white btn-xs">Delete</button>

        </th>
        </tr>
   

        )
      }  
   
     
    </tbody>
   
  </table>
   <div className='flex gap-1 justify-end mr-5'>
    <button className='btn bg-violet-200 text-xl text-gray-800 rounded-xl '>Total Bill : {myBills.length}</button>
     <button className='btn bg-violet-200 text-xl  text-gray-800 rounded-xl'>Total Amount :{totalAmount}</button>
   </div>
</div>
  
    <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
      <div className="max-w-xl mx-auto p-6 bg-violet-50 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-violet-400 border-b pb-2">
        Update Bill
      </h2>
    
    
   {selectedBill && (
  <form onSubmit={(e)=>{handleUpdate(e)}}>
    <div>
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-700"
      >
        Amount
      </label>
      <input
        name="amount"
        type="text"
        value={selectedBill.amount}
        onChange={(e) =>
          setSelectedBill({ ...selectedBill, amount: e.target.value })
        }
        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-3 text-sm text-gray-600"
      />
    </div>

    <div>
      <label
        htmlFor="date"
        className="block text-sm font-medium text-gray-700"
      >
        Date
      </label>
      <input
        name="date"
        type="text"
        value={selectedBill.date}
        onChange={(e) =>
          setSelectedBill({ ...selectedBill, date: e.target.value })
        }
        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-3 text-sm text-gray-600 "
      />
    </div>

    <div>
      <label
        htmlFor="address"
        className="block text-sm font-medium text-gray-700"
      >
        Address
      </label>
      <input
        name="address"
        type="text"
        value={selectedBill.address}
        onChange={(e) =>
          setSelectedBill({ ...selectedBill, address: e.target.value })
        }
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>

    <div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Phone
      </label>
      <input
        name="phone"
        type="tel"
        value={selectedBill.phone}
        onChange={(e) =>
          setSelectedBill({ ...selectedBill, phone: e.target.value })
        }
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
    <div className='flex justify-center items-center'>
          <button className='btn btn-wide  mt-2.5 bg-violet-400 text-white'>Update Bill</button>

    </div>
  </form>
   )}
     
    </div>
         


  </div>
</dialog>
    
        </div>
    );
};

export default MyBill;