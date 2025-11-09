import { useEffect, useState } from "react"
import useAxios from "./axios"
import { useParams } from "react-router"

 const useDetail =()=>{
    const {id} = useParams()
  const instance = useAxios()
const [detail,setDetail] = useState(null)
  useEffect(()=>{

     instance.get(`/bill-detail/${id}`)
     .then((data)=>{
         setDetail(data.data)
     })


  },
  
  [instance,id])

 return detail;

 }
  export default useDetail