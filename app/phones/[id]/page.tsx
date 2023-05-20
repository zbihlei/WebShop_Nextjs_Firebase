import {db} from '../../../firebase-config';
import {doc, getDoc} from 'firebase/firestore';
import styles from '../../styles/phone.module.scss';

type Props = {
    params: {
        id: string,
    }
}

//get phone from db used collection name and id/ id from params
async function getPhone (coll: string, id:string) {
    const phone = await getDoc(doc(db, coll, id))
    if (phone.exists())
      return phone.data()
    else
      return Promise.reject(Error(`No such phone!: ${coll}.${id}`))
  }


export default async function Phone({params} : Props){
    const phone  = await getPhone("phones",params.id);

    return (
    <>
    <div className={styles.wrapp}>
        <img src={phone.photo} alt={phone.name} className={styles.photo} />
        <div className={styles.name}>{phone.name} {phone.model}</div>
        <div className={styles.description}>{phone.description}</div>
        <div className={styles.buy}><button className={styles.buybtn}>BUY {phone.price}$</button></div>
    </div>
    </>
    )
}