import { use, useEffect, useState } from "react"
import useAxios from "./axios"
import { AuthContext } from "../Pages/AuthContext"

 const useBids =()=>{
  const instance = useAxios()
  const {category} = use(AuthContext)
const [allBid,setAllBid] = useState([])
const [billsLoading,setBillsLoading] = useState(true)
  useEffect(()=>{
 
     const url =
          category === "All"
            ? "/bills"
            : `/bills?category=${category}`;


     instance.get(url)
     .then((data)=>{
         setAllBid(data.data)
         setBillsLoading(false)
     })


  },
  
  [instance,category])

 return {allBid,billsLoading};

 }
  export default useBids; 