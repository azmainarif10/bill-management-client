import React from 'react';
import useBids from '../Utils/allBids';
import { Link } from 'react-router';
import Load from '../Components/Load';

const AllCard = () => {
  const {allBid,billsLoading} = useBids()

  if(billsLoading){
    return <Load></Load>
  }
    return (
        <div className='w-11/12 mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          allBid.map(bid=>
                   
                 <div key={bid._id} className="card  shadow-sm">
  <figure className="px-5 py-5 bg-violet-100">
    <img
      src={bid.image}
      alt="Shoes"
      className="rounded-xl w-full h-80" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Title : {bid.title}</h2>
    <p className=' '>Category: {bid.category}</p>
    <p className=' '>Location: {bid.location}</p>
    <p className=''>Amount: {bid.amount}</p>


    <div className="card-actions">
     <Link to={`/bill-detail/${bid._id}`}> <button className="btn bg-violet-500 text-white rounded-xl">See Details</button> </Link>
    </div>
  </div>
</div>
      




          )
        }
        </div>
    );
};

export default AllCard;