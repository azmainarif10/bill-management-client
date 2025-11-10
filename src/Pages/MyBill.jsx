import React, { use } from 'react';
import useMyBills from '../Utils/myBills';
import { AuthContext } from './AuthContext';

const MyBill = () => {
    const {user} = use(AuthContext)
    const myBills = useMyBills()
    const totalAmount = myBills.reduce((sum, bill) => sum + Number(bill.amount), 0);

    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
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
              <div className="font-bold">{mybill.category}</div>
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
          <button className="btn bg-violet-400 text-white btn-xs">Update</button>
          <button className="btn bg-violet-400 text-white btn-xs">Delete</button>

        </th>
        </tr>
   

        )
      }  
   
     
    </tbody>
    {/* foot */}
   
  </table>
   <div className='flex gap-1 justify-end mr-5'>
    <button className='btn bg-violet-200 text-xl text-gray-800 rounded-xl '>Total Bill : {myBills.length}</button>
     <button className='btn bg-violet-200 text-xl  text-gray-800 rounded-xl'>Total Amount :{totalAmount}</button>
   </div>
</div>
        </div>
    );
};

export default MyBill;