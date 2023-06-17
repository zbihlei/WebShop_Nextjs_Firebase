import styles from '../app/styles/client.module.scss';

interface ClientInfo {
  name: string;
  surname: string;
  phone: string;
}

interface BasketItem {
  id: string;
  name: string;
  model: string;
  photo: string;
  price: number;
}

interface Order {
  client: ClientInfo;
  orderStatus: string;
  basket: BasketItem[];
}

interface Props {
  orders: Order[];
}

const Client: React.FC<Props> = ({ orders }) => {
  return (
    <>
      <div className={styles.productlist}>
        {orders.map((order: Order) => (
          <div key={order.basket[0].id}>
            <div className={styles.clientInfo}>
              <div className={styles.name}>{order.client.name}</div>
              <div className={styles.name}>{order.client.surname}</div>
              <div className={styles.name}>{order.client.phone}</div>
              <div className={styles.status}>{order.orderStatus}</div>
            </div>

            {order.basket.map((el: BasketItem) => (
              <div key={el.id} className={styles.orders_wrapp}>
                <div className={styles.photo}>
                  <img src={el.photo} alt="photo" />
                </div>
                <div className={styles.name}>
                  {el.name} {el.model}
                </div>
                <div className={styles.price}>{el.price} $</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Client;