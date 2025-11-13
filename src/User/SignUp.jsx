import { use } from 'react';
import { AuthContext } from '../Pages/AuthContext';
import { Link, useNavigate } from 'react-router';
import { auth } from '../Utils/firebaseinit';
import { toast } from 'react-toastify';

const SignUp = () => {

  const {createUser,updateUser,setUser,googlePopUp} = use(AuthContext)
   
 function googleSignUp(){
       googlePopUp()
       .then((result)=>{
        console.log(result)
        toast("Sucessfully SignUp ")
        navigate("/")
       })
       .catch(error=>{
         toast(error.code)
       })
 }

  const navigate = useNavigate()

     function handleCreatedUser(e){
        e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   const name = e.target.name.value
   const url = e.target.url.value
 
    const upperCase = /[A-Z]/;  
    const  lowerCase = /[a-z]/;
    const sixChar = /^.{6,}$/;

  if(!upperCase.test(password)){
    return toast("password must contain a capital letter")
  }
  if(!lowerCase.test(password)){
        return toast("password must contain a small letter")

  }
   if (!sixChar.test(password)) {
   return toast("Password must be at least 6 characters");
}

      createUser(email,password)
      .then(result =>{
        console.log(result)
         updateUser(name,url)
         .then(result =>{
          console.log(result)
          setUser({...auth.currentUser})
         })
         .catch(error =>{
        toast(error.message)
         })
     toast("Sucessfully SignUp")

        navigate('/')
      })
      .catch(error =>{
               toast(error.message)

    })

     }
    return (
      
        <div>
<title>Sign Up</title>
           <div className="hero  mt-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl text-violet-500 font-bold">Register now!</h1>
        
               <form onSubmit={(e)=>handleCreatedUser(e)}>
               <fieldset className="fieldset">
                 <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
                 <label className="label">Photo URL</label>
          <input type="text"  name='url' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password'  className="input" placeholder="Password" />
        
          <button  className="btn bg-violet-500 mt-4">Register</button>
         
         </fieldset>
         

         </form>
         <button onClick={googleSignUp} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  SignUp with Google
</button>
          <p> Have a account < span className='text-blue-600 underline'><Link to={'/login'}>Register Here</Link> </span></p>

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;
