import Link from 'next/link';
import styles from '../app/styles/phones.module.scss'

type Props ={
    phones: any[]
}

const PhonesList = ({phones}: Props)=> {
    return (
        <ul className={styles.productlist}>
        {phones.map((phone:any)=>{

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

    )
}

export {PhonesList};