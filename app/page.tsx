"use client"
import styles from '../app/styles/home.module.scss'
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
      <h1 className={styles.welcome}>welcome to our store!</h1>
      <div>The last ordered products</div>
      {loading ? <h3>Loading...</h3> : <OrderList orders = {orders}/>}
    </>
    )
}
