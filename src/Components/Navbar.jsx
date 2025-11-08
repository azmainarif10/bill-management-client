import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Pages/AuthContext";

const Navbar = () => {

  const {user,logOut} = use(AuthContext)
   

    return (
        <div>
            
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to={'/'}> Home </Link>
        <Link to={'/add-model'}> Bills </Link>
        {
        user &&  <Link to={'/my-model'}> My Pay Bills </Link>

        }
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-4 px-1">
        <Link to={'/'}> Home </Link>
        <Link to={'/add-model'}> Bills </Link>
       {
        user &&  <Link to={'/my-model'}> My Pay Bills </Link>

       }
       
    </ul>
  </div>
  <div className="navbar-end flex gap-2.5">
    
   
 
 {
  user && user.photoURL ?( <img  className='w-10 h-10 rounded-full' src={user.photoURL}></img>  ) : 
  ( <img  className='w-10 h-full rounded-full' src='/user.png'></img>  )
 }

   {
    user ? (<Link onClick={logOut} className="btn mr-10 text-white bg-[#404040]"> Logout </Link>) :
    (<>
    <p><Link to={'/login'} className="btn ">Login </Link></p>
    <p><Link to={'/signup'} className="btn mr-10">SignUp </Link></p>

    </>)
   }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;