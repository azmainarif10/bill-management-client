import { use, useEffect, useState } from "react"
import { AuthContext } from "../Pages/AuthContext"
import useSecureAxios from "./secureAxios"

 const useMyBills =()=>{
  const secureInstance = useSecureAxios()
  const {user} = use(AuthContext)
const [myBills,setMyBills] = useState([])
 const [billsLoading, setBillsLoading] = useState(true);

  useEffect(()=>{

     secureInstance.get(`/my-bills?email=${user.email}`)
     .then((data)=>{
         setMyBills(data.data)
         setBillsLoading(false)
     })


  },
  
  [secureInstance,user])

 return {myBills,setMyBills,billsLoading};

 }
  export default useMyBills;