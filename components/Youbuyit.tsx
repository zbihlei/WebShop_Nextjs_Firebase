import styles from '../app/styles/youbuyit.module.scss';
import stylesback from '../app/styles/phone.module.scss';
import Link from 'next/link';

export default function YouBuyIT({phone}){
    return(
    <>
    <div className={styles.youbuyit}>
        <span>You buy it!</span>
    </div>

        <div className={styles.wrapp}>
        <img src={phone.photo} alt={phone.name} className={stylesback.photo} />
        <div className={stylesback.name}>{phone.name} {phone.model}</div>
        <div className={stylesback.description}>{phone.description}</div>
        </div>
    </>
    )
}