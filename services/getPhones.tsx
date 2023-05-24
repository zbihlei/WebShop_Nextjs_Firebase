import {collection, getDocs,} from 'firebase/firestore';
import {db} from '../firebase-config';

//get phones from db
 const phonesCollectionRef = collection(db, "phones");
 export async function getAllPhones() {
    const data = await getDocs(phonesCollectionRef);
    const phonesList: any = data.docs.map((item) => ({...item.data(), id:item.id}));
        return phonesList;

 }
