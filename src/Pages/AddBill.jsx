import React, { use } from 'react';
import useAxios from '../Utils/axios';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';



const AddBill = () => {
 
      
  
      const instance = useAxios()
      const {user} = use(AuthContext)

function handleSubmit(e){

   
     e.preventDefault()
     const title = e.target.title.value
     const category = e.target.category.value
     const description = e.target.description.value
     const image  = e.target.image.value
     const date  = e.target.date.value
     const location  = e.target.location.value
     const amount  = e.target.amount.value
     const email = user.email
      
  const added = {
     title,
     category,
     description,
     image,
     email,
     location,
     amount,
     date,
     
  }
   instance.post("/add-bill",added)
   .then(() => {
      toast("Added Successfully!");
      e.target.reset()
   
   })

}


    return (
<>
  
          <title> Add Bills </title>
     
        <div className='bg-linear-to-r from-blue-100 py-3 to-violet-100'>
               <div className="card mt-2 border border-gray-200 bg-violet-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body  relative">
        <h2 className="text-2xl text-violet-500 font-bold text-center mb-2">Add Bill </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium" >Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Title"
            />
          </div>

             <div>
            <label className="label font-medium">Category</label>
            <input
              type="text"
              name="category"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter category"
            />
          </div>
          
            <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Location"
            />
          </div>


            <div>
            <label className="label font-medium">Amount</label>
            <input
              type="text"
              name="amount"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Amount"
            />
          </div>
          
            <div> 
            <label className="label font-medium">Date</label>
            <input
              type="date"
              name="date"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Date"
            />
          </div>

          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="1"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 "
              placeholder="Enter description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 hover:from-blue-300 hover:to-violet-300"
          >
           Add Bill
          </button>
        </form>
      </div>
    </div>
        </div>
        </>
    );
};

export default AddBill;