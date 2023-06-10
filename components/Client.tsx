import React, { useEffect } from 'react'
import styles from '../app/styles/client.module.scss'
type Props = {
  orders: any[]
}
function Client({orders}:Props) {

  return ( 
    <>
        <div className={styles.productlist}>
        {orders.map((order:any)=>{
  
            return (
              <div key={order.basket[0].id} className={styles.listItem}>
  
                <div className={styles.clientInfo}>
                  <div className={styles.name}>{order.client.name}</div>  <div className={styles.name}>{order.client.surname}</div>
                  <div className={styles.name}>{order.client.phone}</div>
                </div>
  
                 <div className={styles.photo}><img src={order.basket[0].photo} alt="photo"/></div> 
                 <div className={styles.name}>{order.basket[0].name}{order.basket[0].model}</div>
                <div className={styles.status}>{order.orderStatus}</div> 
              </div>
            )
               
        })}
    </div>
    </>
    )
}

export default Client