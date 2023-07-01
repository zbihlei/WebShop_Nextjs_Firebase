"use client"
import styles from '../app/styles/404.module.scss'
import Link from 'next/link';
import AppleIcon from '@mui/icons-material/Apple';

export default function NotFound() {
  return (
    <>
    <div className={styles.wrapp}>
    <AppleIcon className={styles.apple}/>
        <h4 className={styles.head}>
            This page is not exist...
        </h4>
            <Link className={styles.ln} href='/'>
                Homepage
            </Link>
    </div>

          </>
  );
}