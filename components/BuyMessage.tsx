import styles from '../app/styles/buyMessage.module.scss';
import stylesback from '../app/styles/good.module.scss';
import Link from 'next/link';

interface Good {
    photo: string;
    name: string;
    model: string;
    description: string;
  }

  interface Props {
    good: Good;
  }

const YouBuyIT: React.FC<Props> =({good})=>{
    return(
    <>
    <div className={styles.youBuyIt}>
        <span>You buy it!</span>
    </div>
    <Link className={styles.basketLink} href={'/basket'}>go to basket</Link>


        <div className={styles.wrapp}>
        <img src={good.photo} alt={good.name} className={stylesback.photo} />
        <div className={stylesback.name}>{good.name} {good.model}</div>
        <div className={stylesback.description}>{good.description}</div>
        </div>
    </>
    )
}
export default YouBuyIT;