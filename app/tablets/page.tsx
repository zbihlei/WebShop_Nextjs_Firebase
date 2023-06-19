"use client"
import { useEffect, useState } from 'react';
import { getAllItems } from '@/services/getGoods';
import {GoodsList} from '@/components/Goods';
import {Search} from '@/components/Search';


export default function Phones(){
  const [tablets, setTablets] = useState([]);
  const [loading, setLoading] = useState(true);

  const onRequest = () =>{
    getAllItems('tablets')
    .then(setTablets)
    .finally(()=>setLoading(false));
  }

  const getBySearch =(param : string)=>{
    if (!param) {
      onRequest();
    }
    return tablets.filter((item)=>
        item.model.toLowerCase().includes(param) 
    )}

    useEffect(()=>{
      onRequest()
    },[])
    
    return (
    <>
       <h1>Tablets</h1>
       <Search getBySearch = {getBySearch} onSearch = {setTablets} text = 'tablet model...'/>
       {loading ? <h3>Loading...</h3> : <GoodsList goods = {tablets}/>}
       
    </>
  )
}