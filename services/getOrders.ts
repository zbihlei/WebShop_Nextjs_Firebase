import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

// Get last ordered products from the database
const ordersRef = collection(db, "orders");
export async function getAllOrders(): Promise<any[]> {
  const querySnapshot = await getDocs(ordersRef);
  const ordersList: any[] = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return ordersList.map((item: any) => ({ ...item.basket[0] }));
}

// Get user orders based on email
export async function getClientOrders(mail: string): Promise<any[]> {
  const querySnapshot = await getDocs(ordersRef);
  const ordersList: any[] = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return ordersList.filter((item) => item.client.email.includes(mail));
}

// Get admin page orders
export async function getAdminOrders(): Promise<any[]> {
  const querySnapshot = await getDocs(ordersRef);
  const ordersList: any[] = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return ordersList;
}