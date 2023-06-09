import Link from "next/link";
import styles from '../app/styles/header.module.scss'

export default function TheHeader(){
    return (
        <header className={styles.headerwrapp}>
            <div className={styles.left}>
                <Link href = {'/'} className={styles.mplink}>webshop</Link>
            </div>
            <div className={styles.right}>
                <Link  href={'/basket'}>basket</Link>
            </div>
        </header>
    )
  }