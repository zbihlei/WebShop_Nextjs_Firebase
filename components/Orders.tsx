import styles from '../app/styles/orders.module.scss'
import Link from 'next/link'

type Props ={
    orders: any[]
}

const OrderList = ({orders}:Props)=> {

    return (
    <>
        <ul className={styles.productlist}>
        {orders.map((order:any)=>{

            return (
              <li className={styles.listitem} key={order.id}>
                <Link className={styles.photo} href={`/${order.category}/${order.id}`}><img src={order.photo} alt="order"/></Link>
                <Link  className={styles.name} href={`/${order.category}/${order.id}`}>{order.name} {order.model}</Link> 
              </li>
            )
        })}
    </ul>
    </>
    )
}

export {OrderList};