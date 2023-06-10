"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Client from '../../components/Client';
import { getClientOrders } from '@/services/getOrders';

function ClientPage() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState();
    // const {email} = useSelector(state =>state.user);
    const email = 'm@mail.com'

    const onRequest =()=>{
        getClientOrders(email)
          .then(setOrders)
          .finally(()=>setLoading(false))  
        }
    
      useEffect(()=>{
        onRequest()
      },[])
    
  return (
    
    <>
    <div>Hello, {email}</div>
        <h3 style={{'marginTop':'10px'}}>Your orders</h3>
        {loading ? <h3>Loading...</h3>: <Client orders = {orders}/> }
    </>
  )
}

export default ClientPage 

