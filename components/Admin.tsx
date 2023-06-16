import styles from '../app/styles/admin.module.scss';
import { useState, useEffect} from 'react';
import {changeStatus} from '../services/updateStatus';
type Props = {
  orders: any[]
}
function Admin({orders}:Props) {

  const [status, setStatus] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  //total order sum
    const totalCosts = ()=>{
    let arr = [];
        orders.map((order)=>{
          arr.push(order.basket.map((item)=>{
               return item.price
           }))
        })
  
        let res = arr.map((ar)=>{
            const initialValue = 0;
            const totalSum = ar.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue)
                    return totalSum
        })
        let orderIds = [];
        orders.map((order)=>{
          return orderIds.push(order.orderId)
        })
        console.log(orderIds, res)
    }

    useEffect(()=>{
      totalCosts()
  },[])

    const statusHandler = (id)=>{
      changeStatus(id, newStatus);
      setStatus(false);
    }
       
  return ( 
    <>
        <div className={styles.productlist}>
        {orders.map((order:any)=>{
    
          return (

            <div key={order.basket[0].id}>

              <div className={styles.clientInfo}>
                <div className={styles.name}>{order.client.name}</div> <div className={styles.name}>{order.client.surname}</div>
                <div className={styles.name}>{order.client.phone}</div>
                <div className={styles.name}>{order.client.email}</div>
                {status ? 
                <>
                 <input placeholder={order.orderStatus} value={newStatus} onChange={(e)=>{setNewStatus(e.target.value)}}/>
                 <button className={styles.statusbtn} onClick={()=>setStatus(false)}>cancel</button> 
                 <button className={styles.statusbtn} onClick={()=>statusHandler(order.orderId)}>apply</button> 
                </>
               : <div onClick={()=>setStatus(true)} className={styles.status}>{order.orderStatus}</div>}
              </div>

              {order.basket.map((el)=>{
                return(
                  <>
                  <div className={styles.orders_wrapp}>
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

export default Admin