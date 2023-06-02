import styles from '../app/styles/phones.module.scss'

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
                <img className={styles.photo} src={order.photo} alt="order"/>
                <div className={styles.name}>{order.name} {order.model}</div>
                <div className={styles.price}>{order.price}$</div>
              </li>
            )
        })}
    </ul>
    </>
    )
}

export {OrderList};