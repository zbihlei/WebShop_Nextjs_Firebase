import { collection, getDocs, getDoc, doc, DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { db } from '../firebase-config';

// Get items from the database
export async function getAllItems(coll: string): Promise<any[]> {
  const itemsCollectionRef = collection(db, coll);
  const querySnapshot: QuerySnapshot = await getDocs(itemsCollectionRef);
  const phonesList: any[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return phonesList;
}

// Get item from the database using collection name and id
export async function getItem(coll: string, id: string): Promise<any> {
  const itemRef = doc(db, coll, id);
  const itemSnapshot: DocumentSnapshot = await getDoc(itemRef);
  if (itemSnapshot.exists()) {
    return itemSnapshot.data();
  } else {
    return Promise.reject(Error(`No such item!: ${coll}.${id}`));
  }
}

