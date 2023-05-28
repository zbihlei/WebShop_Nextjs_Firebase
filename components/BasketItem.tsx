"use client"
import { deleteFromBasket } from "@/store/phoneSlice";
import { useDispatch } from "react-redux";
import styles from '../app/styles/basketitem.module.scss'

const BasketItem = ({id,name,price,model}) =>{
    const dispatch = useDispatch();

    return (
        <>
            <li className={styles.list}>
                <div className={styles.name}>{name}</div>
                <div className={styles.model}>{model}</div>
                <div className={styles.price}>{price}</div>
                <button className={styles.delete} onClick={()=>dispatch(deleteFromBasket(id))}>x</button>
            </li>
        </>
    )
}

export default BasketItem