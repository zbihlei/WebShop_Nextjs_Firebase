import Link from 'next/link';
import styles from '../app/styles/goodsList.module.scss'

type Props ={
    goods: any[]
}

const GoodsList = ({goods}:Props)=> {

    return (
    
        <ul className={styles.productlist}>
        {goods.map((good:any)=>{

               const descr : string = good.description
               const shortDescr = descr.substring(0,100);

            return (
              <li className={styles.listitem} key={good.id}>
                <Link href={`/${good.category}/${good.id}`} className={styles.photo}><img src={good.photo} alt="phone"/></Link>
                <Link href={`/${good.category}/${good.id}`} className={styles.name}>{good.name} {good.model}</Link>
                <div className={styles.price}>{good.price}$</div>
                <div className={styles.description}>{shortDescr} ...</div>
              </li>
            )
        })}
    </ul>

    )
}

export {GoodsList};