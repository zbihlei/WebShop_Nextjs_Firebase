import styles from '../app/styles/admin.module.scss';
import { useState} from 'react';
import {changeStatus} from '../services/updateStatus';
type Props = {
  orders: any[]
}
function Admin({orders}:Props) {

  const [status, setStatus] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  //order items sum

    const totalCosts = () => {
      let prices: number[][] = [];
      orders.map((order: any) => {
        prices.push(
          order.basket.map((item: any) => {
            return item.price;
          })
        );
      });
    
      let total: number[] = prices.map((ar: number[]) => {
        const initialValue = 0;
        const totalSum = ar.reduce(
          (accumulator: number, currentValue: number) => accumulator + currentValue,
          initialValue
        );
        return totalSum;
      });
    
      let orderIds: string[] = [];
      orders.map((order: any) => {
        return orderIds.push(order.orderId);
      });
    
      let result: { [key: string]: number } = orderIds.reduce((obj:any, key, index) => {
        obj[key] = total[index];
        return obj;
      }, {});
    
      let output: { [key: string]: number }[] = [];
      output.push(result);
      return output;
    };

    const totalPrices = totalCosts();
   
    const statusHandler = (id:string)=>{
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

              {order.basket.map((el: any)=>{
                return(
                  <>
                  <div className={styles.orders_wrapp}>
                  <div className={styles.name}>{el.name} {el.model}</div>
                  <div className={styles.price}>{el.price} $</div>
                  </div>
                  </>
                )
              })}
              {totalPrices.map((el)=>{
                for (let i in el){
                  if (i === order.orderId){
                    return (
                      <div className={styles.total}>total: {el[i]} $</div>
                    )
                  }
                }
              })}
            </div>
          )
        })}
    </div>
    </>
    )
}

export default Admin