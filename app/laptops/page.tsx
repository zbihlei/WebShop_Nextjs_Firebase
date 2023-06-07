"use client"
import { useEffect, useState } from 'react';
import { getAllItems } from '@/services/getGoods';
import {GoodsList} from '@/components/Goods';
import {Search} from '@/components/Search';


export default function Laptops(){
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  const onRequest = () =>{
    getAllItems('laptops')
    .then(setLaptops)
    .finally(()=>setLoading(false));
  }

  const getBySearch =(param : string)=>{
    if (!param) {
      onRequest();
    }
    return laptops.filter((item)=>
        item.model.toLowerCase().includes(param) 
    )}

    useEffect(()=>{
      onRequest()
    },[])
    
    return (
    <>
       <h1>Laptops</h1>
       <Search getBySearch = {getBySearch} onSearch = {setLaptops}/>
       {loading ? <h3>Loading...</h3> : <GoodsList goods = {laptops}/>}
       
    </>
  )
}