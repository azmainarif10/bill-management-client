import { use, useEffect, useState } from "react"
import { AuthContext } from "../Pages/AuthContext"
import useSecureAxios from "./secureAxios"

 const useMyBills =()=>{
  const secureInstance = useSecureAxios()
  const {user} = use(AuthContext)
const [myBills,setMyBills] = useState([])
  useEffect(()=>{

     secureInstance.get(`/my-bills?email=${user.email}`)
     .then((data)=>{
         setMyBills(data.data)
     })


  },
  
  [secureInstance,user])

 return {myBills,setMyBills};

 }
  export default useMyBills;