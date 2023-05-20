import {collection, getDocs,} from 'firebase/firestore';
import {db} from '../../firebase-config';
import Link from 'next/link';
import styles from '../styles/phones.module.scss';



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
          <h1>Phones</h1>
        <ul className={styles.productlist}>
            {phonesList.map((phone: any)=>{
                   const descr : string = phone.description
                   const shortDescr = descr.substring(0,100);
                return (
                  <li className={styles.listitem} key={phone.id}>
                    <Link href={`/phones/${phone.id}`} className={styles.photo}><img src={phone.photo} alt="phone"/></Link>
                    <Link href={`/phones/${phone.id}`} className={styles.name}>{phone.name} {phone.model}</Link>
                    <div className={styles.price}>{phone.price}$</div>
                    <div className={styles.description}>{shortDescr} ...</div>
                  </li>
                )
            })}
        </ul>
    </>
    )
}