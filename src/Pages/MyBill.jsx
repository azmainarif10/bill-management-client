import React, { use, useRef, useState } from 'react';
import useMyBills from '../Utils/myBills';
import { AuthContext } from './AuthContext';
import useAxios from '../Utils/axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import Load from '../Components/Load';
import { jsPDF } from 'jspdf'
import  autoTable  from 'jspdf-autotable'
import ReportView from '../Components/ReportView';


const MyBill = () => {
    const instance = useAxios()
    const [selectedBill,setSelectedBill]= useState(null)
    const modalRef = useRef()
    const {user} = use(AuthContext)
    const {myBills,setMyBills,billsLoading} = useMyBills()
    const totalAmount = myBills.reduce((sum, bill) => sum + Number(bill.amount), 0);

    if (!user ){
    return (<>
   <p className='text-xl text-center mt-10 text-indigo-400 font-bold'>You have not pay any bills yet!!! </p>

    <Load></Load>
    
    </>

    )  ;
    } 
    if ( billsLoading){
    return (<>
   <p className='text-xl text-center mt-10 text-indigo-400 font-bold'> Your paid bills are Loading!!! </p>

    <Load></Load>
    
    </>

    )  ;
    } 
    if (myBills.length === 0){
    return (<>
   <p className='text-xl text-center mt-10 text-indigo-400 font-bold'> Your have not paid any bills yet!!! </p>

    <Load></Load>
    
    </>

    )  ;
    } 
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
   function handleDelete(billId){
    
          Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    instance.delete(`/my-bills/delete/${billId}`)
     .then(()=>{
          const deleted = myBills.filter(bill=>bill._id !== billId)
          setMyBills(deleted)
        
           Swal.fire({
      title: "Deleted!",
      text: "Your bill has been deleted.",
      icon: "success"
        });
        
        })
      .catch(() => {
                    toast.error("Delete failed!");
                });
  }
});
     
  

   }
   function handleReport(){

       const doc = new jsPDF();

        const head = [['#', 'Name', 'Address', 'Date', 'Amount', 'Email', 'Phone']];
    const body = myBills.map((bill, index) => [
     index + 1,
     bill.username,
     bill.address,
     bill.date,
     bill.amount,
     bill.email,
     bill.phone,
 ]);
     doc.setFontSize(18);
      doc.text(`Billing Report for ${user.email}`, 14, 20); 

    autoTable(doc,{
       head: head,
       body: body,
       startY: 30,
       theme: 'striped',
       headStyles: { fillColor: [79, 70, 229] }, 
});
      const finalY = doc.lastAutoTable.finalY; 
     doc.setFontSize(12);
     doc.text(`Total Bills: ${myBills.length}`, 14, finalY + 10);
       doc.text(`Total Amount: ${totalAmount}`, 14, finalY + 17);
        doc.save("Billing-Report.pdf");
   }
   function closeModal(){
    modalRef.current.close()
   }
    return (
           <>
                <title> My Bills </title>

        <div>
             <div className="overflow-x-auto hidden lg:block">
  <table className="table w-full">
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
          <button onClick={()=>{handleDelete(mybill._id)}} className="btn bg-indigo-400 text-white btn-xs">Delete</button>

        </th>
        </tr>
   

        )
      }  
   
     
    </tbody>
   
  </table>
   </div>

   <div className="lg:hidden space-y-4">
  {myBills.map((mybill, index) => (
    <div key={mybill._id} className="card bg-base-100 shadow-xl border border-gray-200">
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={user.photoURL} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">{mybill.username}</div>
              <div className="text-lg text-gray-500">#{index + 1}</div>
            </div>
          </div>
          <div className="badge badge-lg bg-violet-400 text-white font-bold">
            {mybill.amount}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col">
            <span className="text-lg text-gray-500 font-semibold">Address:</span>
            <span className="text-sm">{mybill.address}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg text-gray-500 font-semibold">Date:</span>
            <span className="badge badge-ghost badge-sm">{mybill.date}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg text-gray-500 font-semibold">Email:</span>
            <span className="text-lg">{mybill.email}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg text-gray-500 font-semibold">Phone:</span>
            <span className="badge badge-ghost badge-sm">{mybill.phone}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4 gap-2">
          <button 
            onClick={() => { 
              setSelectedBill(mybill);
              handleModal()
            }} 
            className="btn bg-violet-400 text-white btn-sm flex-1"
          >
            Update
          </button>
          <button 
            onClick={() => handleDelete(mybill._id)} 
            className="btn bg-indigo-400 text-white btn-sm flex-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}

</div>
   
   <div className='flex gap-1 justify-end mr-5'>
    <button className='btn bg-violet-200 text-xl text-gray-800 rounded-xl '>Total Bill : {myBills.length}</button>
     <button className='btn bg-violet-200 text-xl  text-gray-800 rounded-xl'>Total Amount :{totalAmount}</button>
   </div>

   <div className='flex justify-center py-5 items-center'>
    <button onClick={()=>{handleReport()}} className='btn  text-lg  bg-violet-400 text-white'>Download Report</button>
   </div>

    <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
      <div className="max-w-xl mx-auto p-6 bg-violet-50 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-violet-400 border-b pb-2">
        Update Bill
      </h2>
    
    
   {selectedBill && (
  <form onSubmit={(e)=>{handleUpdate(e)}}>

  <button type='button' onClick={closeModal} className="btn btn-sm btn-circle bg-violet-400 text-white btn-ghost absolute right-8 top-8">✕</button>
        <p className="py-4 text-gray-800">Press ESC key or click on ✕ button to close</p>

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
    <ReportView myBills={myBills} ></ReportView>
        </div>
        </>
    );
};

export default MyBill;