import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase-config';

export async function changeStatus(id: string, val: string) {
  const orderRef = doc(db, "orders", id);
  await updateDoc(orderRef, {
    orderStatus: val
  });
}