import Link from 'next/link';
import styles from '../app/styles/goodsList.module.scss';

interface Good {
  id: string;
  category: string;
  name: string;
  model: string;
  photo: string;
  price: number;
  description: string;
}

interface Props {
  goods: Good[];
}

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className={styles.productlist}>
      {goods.map((good: Good) => {
        const descr: string = good.description;
        const shortDescr = descr.substring(0, 100);

        return (
          <li className={styles.listitem} key={good.id}>
            <Link as={`/${good.category}/${good.id}`} href={`/${good.category}/${good.id}`} className={styles.photo}>
              <img src={good.photo} alt="phone" />
            </Link>
            <Link href={`/${good.category}/${good.id}`} className={styles.name}>
              {good.name} {good.model}
            </Link>
            <div className={styles.price}>{good.price}$</div>
            <div className={styles.description}>{shortDescr} ...</div>
          </li>
        );
      })}
    </ul>
  );
};

export { GoodsList };