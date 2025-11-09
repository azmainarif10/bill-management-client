import React from 'react';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bill-management-server-three.vercel.app',
 
})
  const useAxios=()=>{

     return instance;

  }
  export default useAxios;