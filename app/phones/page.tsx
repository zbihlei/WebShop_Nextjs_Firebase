"use client"
import { useEffect, useState } from 'react';
import { getAllPhones } from '@/services/getPhones';
import {PhonesList} from '@/components/Phones';
import {Search} from '@/components/Search';


export default function Phones(){
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const onRequest = () =>{
    getAllPhones()
    .then(setPhones)
    .finally(()=>setLoading(false));
  }

  const getBySearch =(param : string)=>{
    if (!param) {
      onRequest();
    }
    return phones.filter((item)=>
        item.model.toLowerCase().includes(param)
    )}

    useEffect(()=>{
      onRequest()
    },[])
    
    return (
    <>
       <h1>Phones</h1>
       <Search getBySearch = {getBySearch} onSearch = {setPhones}/>
       {loading ? <h3>Loading...</h3> : <PhonesList phones = {phones}/>}
       
    </>
  )
}