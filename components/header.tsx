"use client"
import Link from "next/link";
import styles from '../app/styles/header.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppleIcon from '@mui/icons-material/Apple';

const TheHeader: React.FC = () => {
  return (
    <header className={styles.headerwrapp}>
      <div className={styles.left}>
        <Link href={'/'} className={styles.mplink}><AppleIcon className={styles.apple}/> WEBSHOP</Link>
      </div>
      <div className={styles.right}>
        <Link href={'/basket'}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </header>
  );
}

export default TheHeader;