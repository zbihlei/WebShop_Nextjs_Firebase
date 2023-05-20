import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase-config';
import Link from 'next/link';
import styles from '../styles/phones.module.scss';
import { Grid, ListItem, Typography } from '@mui/material'


//get phones from db
const phonesCollectionRef = collection(db, "phones");
 async function getPhones() {
    const data = await getDocs(phonesCollectionRef);
        return data; 
 }


export default async function Phones(){
    const phones = await getPhones();
    const phonesList: any = phones.docs.map((phone) => ({...phone.data(), id:phone.id}));

    return (
    <>
          <h1>Phones page</h1>
        <ul>
            {phonesList.map((phone: any)=>{
                return (
                  <li className={styles.test} key={phone.id}>
                    <Link href={`/phones/${phone.id}`}>{phone.name} {phone.model}</Link>
                    <div>{phone.description}</div>
                  </li>
                )
            })}
        </ul>
    </>
    )
}



// <ul>
// {phonesList.map((phone: any)=>{
//     return (
//       <li className={styles.test} key={phone.id}>
//         <Link href={`/phones/${phone.id}`}>{phone.name} {phone.model}</Link>
//         <div>{phone.description}</div>
//       </li>
//     )
// })}
// </ul>