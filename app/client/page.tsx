"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Client from '../../components/Client';
import { getClientOrders } from '@/services/getOrders';
import { RootState } from "@/store/index";
import { redirect } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth';

function ClientPage() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState<any[]>();
    const {email} = useSelector((state:RootState) =>state.user);
    const {isAuth} = useAuth();
    // const email = 'm@mail.com' // without login

    const onRequest =()=>{
        getClientOrders(email)
          .then(setOrders)
          .finally(()=>setLoading(false))  
        }
    
      useEffect(()=>{
        onRequest();
        if(!isAuth){
          redirect('/');
        }
      },[])
    
  return (
    <>
    {orders ? 
    <>
    <div>Hello, {email}</div>
        <h3 style={{'marginTop':'10px'}}>Your orders</h3>
        {loading ? <h3>Loading...</h3>: <Client orders = {orders}/> }
    </>
    : null}
    </>
  )
}

export default ClientPage 

