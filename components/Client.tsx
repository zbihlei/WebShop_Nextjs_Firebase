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

            <div key={order.basket[0].id}>

              <div className={styles.clientInfo}>
                <div className={styles.name}>{order.client.name}</div> <div className={styles.name}>{order.client.surname}</div>
                <div className={styles.name}>{order.client.phone}</div>

                <div className={styles.status}>{order.orderStatus}</div>
              </div>

              {order.basket.map((el)=>{
                return(
                  <>
                  <div className={styles.orders_wrapp}>
                   <div className={styles.photo}><img src={el.photo} alt="photo"/></div>
                  <div className={styles.name}>{el.name} {el.model}</div>
                  <div className={styles.price}>{el.price} $</div>
                  </div>
             
                  </>
                )
              })}

          
            </div>
          )  
        })}
    </div>
    </>
    )
}

export default Client