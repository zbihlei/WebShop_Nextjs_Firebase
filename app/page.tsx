"use client"
import styles from '../app/styles/home.module.scss'
import { useState,useEffect } from 'react';
import { getAllOrders } from '@/services/getOrders';
import { OrderList } from '@/components/Orders';
import Auth from '@/components/auth/Auth';
import { useAuth } from '@/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '@/store/userSlice';

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();

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
    <div className={styles.wrapp}>

      <div className={styles.leftside}>
        <h1 className={styles.welcome}>welcome to our store!</h1>
    {!isAuth ? 
     <div className={styles.banner}>
        <div>This is banner!</div>
      </div>
   : null  
      }
      </div>
  
    {!isAuth ? <Auth/> : <div className={styles.welcome_text}>Welcome! {email}</div>}
    {isAuth ? <button className={styles.btn_logout}  onClick={()=>dispatch(removeUser())}>Log out</button> : null}
    </div>

      <div>The last ordered products</div>
      {loading ? <h3>Loading...</h3> : <OrderList orders = {orders}/>} 
    </>
    )
}
