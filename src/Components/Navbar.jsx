import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Pages/AuthContext";

const Navbar = () => {
  const [theme,setTheme] = useState(localStorage.getItem("theme") || "light")
  const {user,logOut} = use(AuthContext)
  useEffect(()=>{ const html = document.querySelector("html");
     html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme); 
    },[theme])


       function handleTheme(checked){
         setTheme(checked ? "dark" :"light")
         }


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
        className="menu menu-sm dropdown-content text-xl bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <Link to={'/'}> <p className="text-xl text-violet-400 font-medium">Home</p> </Link>
        <Link to={'/bills'}> <p className="text-xl text-violet-400 font-medium">Bills</p> </Link>
        <Link to={'/add-bills'}> <p className="text-xl text-violet-400 font-medium"> Add Bills</p> </Link>

         {
        user &&  <Link to={'/bill-detail/:id'}> <p className="text-xl text-violet-400 font-medium">Bill Details</p> </Link>

        }
       {
        user &&  <Link to={'/pay-bill'}> <p className="text-xl text-violet-400 font-medium">My Pay Bills</p></Link>

       }
        
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-4 px-1">
        <Link to={'/'}> <p className="text-xl text-violet-400 font-medium">Home</p> </Link>
        <Link to={'/bills'}> <p className="text-xl text-violet-400 font-medium">Bills</p> </Link>
        <Link to={'/add-bills'}> <p className="text-xl text-violet-400 font-medium"> Add Bills</p> </Link>

         {
        user &&  <Link to={'/bill-detail/:id'}> <p className="text-xl text-violet-400 font-medium">Bill Details</p> </Link>

        }
       {
        user &&  <Link to={'/pay-bill'}> <p className="text-xl text-violet-400 font-medium">My Pay Bills</p></Link>

       }
       
    </ul>
  </div>
  <div className="navbar-end flex gap-2.5">
    
   
 
 {
  user && user.photoURL ?( <img  className='w-10 h-10 rounded-full' src={user.photoURL}></img>  ) : 
  ( <img  className='w-10 h-full rounded-full' src='https://i.ibb.co.com/gL19M6xH/icon-7797704-640.png'></img>  )
 }

   {
    user ? (<Link onClick={logOut} className="btn mr-10 text-white bg-violet-400"> Logout </Link>) :
    (<>
    <p><Link to={'/login'} className="btn bg-violet-400 text-white ">Login </Link></p>
    <p><Link to={'/signup'} className="btn  bg-violet-400 text-white mr-10">SignUp </Link></p>

    </>)
   }
    
  </div>

 <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input onChange={(e)=>{handleTheme(e.target.checked)}}   checked={theme === "dark"}   type="checkbox"  className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
        </div>
        </div>

    );
};

export default Navbar;