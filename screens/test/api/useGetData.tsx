import { FC, useEffect, useRef, useState } from "react";
import axios from "axios";
const useGetData:FC<any> = (value) => {
  const count = useRef(0)
  
   useEffect(()=>{
    count.current = value
   },[value])

   

    return [count.current];
};

export default useGetData