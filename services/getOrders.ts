import {collection, getDocs, getDoc, doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase-config';


//get last ordered products from db
const ordersRef = collection(db, "orders");
export async function getAllOrders() {
   const data = await getDocs(ordersRef);
   const ordersList: any = data.docs.map((item) => ({...item.data()}));
       return ordersList.map((item: any)=>{
         return {...item.basket[0]}
       })

}