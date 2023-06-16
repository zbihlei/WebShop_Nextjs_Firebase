import {collection, getDocs, getDoc, doc, setDoc, query, where} from 'firebase/firestore';
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
// get user orders
export async function getClientOrders(mail:string) {
   const data = await getDocs(ordersRef);
   const ordersList: any = data.docs.map((item) => ({...item.data()}));
       return ordersList.filter((item)=>{
          return item.client.email.includes(mail);
      })
}

///get admin page orders
export async function getAdminOrders() {
   const data = await getDocs(ordersRef);
   const ordersList: any = data.docs.map((item) => ({...item.data()}));
    
      return ordersList;
}