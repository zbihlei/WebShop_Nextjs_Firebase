"use client"
import styles from '../app/styles/header.module.scss';


export default function TheHeader(){
  return (
      <header className={styles.head}>
         <input type="search" placeholder="search..." className={styles.search}/>
      </header>
  )
}