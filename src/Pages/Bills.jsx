import React, { use } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import AllCard from './AllCard';
import { AuthContext } from './AuthContext';

const Bills = () => {
  const {setCategory} = use(AuthContext)
     

 
    return (
      <>
        
                <title> Bills </title>
        

        <div className='flex justify-center flex-col items-center'>
         <p className='text-3xl mt-3 text-violet-400 font-bold'> All Bids  </p>    
            <p className='text-3xl mt-3 text-violet-400 font-bold'> Such as:  <Typewriter
            words={['Electricity', 'Internet', 'Water', 'Gas']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></p>
        </div>
          <div >
                <div className="dropdown dropdown-bottom flex justify-end lg:mr-15 mr-3">
  <div tabIndex={0} role="button" className="btn  bg-violet-400 text-white m-1">Filter by category</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-violet-400 text-white rounded-box z-1 w-52 p-2 shadow-sm">
     <li><button onClick={() => setCategory("All")} >All</button></li>

    <li><button onClick={() => setCategory("Water")} >Water</button></li>
    <li><button onClick={() => setCategory("Internet")} >Internet</button></li>
    <li><button onClick={() => setCategory("Electricity")}>Electricity</button></li>
     <li><button onClick={() => setCategory("Gas")} >Gas</button></li>
  </ul>
</div>
                <AllCard></AllCard>
               
          </div>
        </>
    );
}

export default Bills;