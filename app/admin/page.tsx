"use client"
import { useSelector } from 'react-redux';
import { RootState } from "@/store/index";
import { useEffect, useState } from 'react';
import Admin from '../../components/Admin';
import { getAdminOrders } from '@/services/getOrders';

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[] | undefined>();
  // const { email } = useSelector((state:RootState) => state.user);
   const email = 'admin@mail.com' // without login

  const onRequest = () => {
    getAdminOrders()
      .then(setOrders)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    onRequest()
  }, [])

  return (
    <>
      <div>Hello, {email}</div>
      <h3 style={{ marginTop: '10px' }}>Order list:</h3>
      {loading ? <h3>Loading...</h3> : <Admin orders={orders} onRequest={onRequest} />}
    </>
  )
}

export default AdminPage;

