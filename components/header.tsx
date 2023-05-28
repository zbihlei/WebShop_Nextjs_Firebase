import Link from "next/link";
import styles from '../app/styles/header.module.scss'

export default function TheHeader(){
    return (
        <header className={styles.headerwrapp}>
            <div className={styles.left}>
                <Link href = {'/'} style={{'text-decoration': 'none','color':'black'}}>webshop</Link>
            </div>
            <div className={styles.right}>
                <Link  href={'/basket'}>basket</Link>
            </div>
        </header>
    )
  }