import { use, useEffect, useState } from "react"
import useAxios from "./axios"
import { AuthContext } from "../Pages/AuthContext"

 const useMyBills =()=>{
  const instance = useAxios()
  const {user} = use(AuthContext)
const [myBills,setMyBills] = useState([])
  useEffect(()=>{

     instance.get(`/my-bills?email=${user.email}`)
     .then((data)=>{
         setMyBills(data.data)
     })


  },
  
  [instance,user])

 return {myBills,setMyBills};

 }
  export default useMyBills;