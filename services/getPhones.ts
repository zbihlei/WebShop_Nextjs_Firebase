import {collection, getDocs, getDoc, doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase-config';

//get phones from db
 const phonesCollectionRef = collection(db, "phones");
 export async function getAllPhones() {
    const data = await getDocs(phonesCollectionRef);
    const phonesList: any = data.docs.map((item) => ({...item.data(), id:item.id}));
        return phonesList;

 }

//get phone from db used collection name and id/ id from params
export async function getPhone (coll: string, id:string) {
    const phone = await getDoc(doc(db, coll, id))
    if (phone.exists())
      return phone.data()
    else
      return Promise.reject(Error(`No such phone!: ${coll}.${id}`))
  }
//post basket data to database

export async function postBasket(data:any, coll:string) {
 
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  today.toUTCString();
  let id = today.toUTCString();

 await setDoc(doc(db, coll, id), {
      ...data,
      oderAt: today 
    })

}

