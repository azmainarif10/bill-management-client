import { useEffect, useState } from "react"
import useAxios from "./axios"

 const useLatest =()=>{
  const instance = useAxios()
const [latest,setLatest] = useState([])
  useEffect(()=>{

     instance.get("/homepage-bills")
     .then((data)=>{
         setLatest(data.data)
     })


  },
  
  [instance])

 return latest

 }
  export default useLatest