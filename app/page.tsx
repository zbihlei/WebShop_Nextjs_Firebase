"use client"
import styles from './page.module.css'
import { useState,useEffect } from 'react';
import { getAllOrders } from '@/services/getOrders';
import { OrderList } from '@/components/Orders';


export default function Home() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  const onRequest = () =>{
    getAllOrders()
    .then(setOrders)
    .finally(()=>setLoading(false))
  }

  useEffect(()=>{
    onRequest()
  },[])

  return (
    <>
      <div>Last orders...</div>
      {loading ? <h3>Loading...</h3> : <OrderList orders = {orders}/>}
    </>
    )
}
