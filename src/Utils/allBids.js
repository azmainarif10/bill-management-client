import { use, useEffect, useState } from "react"
import useAxios from "./axios"
import { AuthContext } from "../Pages/AuthContext"

 const useBids =()=>{
  const instance = useAxios()
  const {category} = use(AuthContext)
const [allBid,setAllBid] = useState([])
  useEffect(()=>{
 
     const url =
          category === "All"
            ? "/bills"
            : `/bills?category=${category}`;


     instance.get(url)
     .then((data)=>{
         setAllBid(data.data)
     })


  },
  
  [instance,category])

 return allBid;

 }
  export default useBids; 