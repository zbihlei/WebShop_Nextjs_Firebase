import {doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase-config';

//post basket data to database

export async function postBasket(data:any, coll:string) {
 
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toUTCString();
    let id = today.toUTCString();
  
   await setDoc(doc(db, coll, id), {
        ...data,
        oderAt: today,
        orderStatus: 'new'
      })
  
  }
  