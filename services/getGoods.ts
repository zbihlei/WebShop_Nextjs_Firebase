import {collection, getDocs, getDoc, doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase-config';

//get items from db

 export async function getAllItems(coll: string) {
    const itemsCollctionRef = collection(db, coll);
    const data = await getDocs(itemsCollctionRef);
    const phonesList: any = data.docs.map((item) => ({...item.data(), id:item.id}));
        return phonesList;

 }

//get item from db used collection name and id/ id from params
export async function getItem (coll: string, id:string) {
    const item = await getDoc(doc(db, coll, id))
    if (item.exists())
      return item.data()
    else
      return Promise.reject(Error(`No such item!: ${coll}.${id}`))
  }

