import styles from '../app/styles/buyMessage.module.scss';
import stylesback from '../app/styles/good.module.scss';

export default function YouBuyIT({good}){
    return(
    <>
    <div className={styles.youbuyit}>
        <span>You buy it!</span>
    </div>

        <div className={styles.wrapp}>
        <img src={good.photo} alt={good.name} className={stylesback.photo} />
        <div className={stylesback.name}>{good.name} {good.model}</div>
        <div className={stylesback.description}>{good.description}</div>
        </div>
    </>
    )
}