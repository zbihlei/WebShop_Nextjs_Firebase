import { deleteFromBasket } from "@/store/goodsSlice";
import { useDispatch } from "react-redux";
import styles from '../app/styles/basketitem.module.scss'

type Props ={
    id:string,
    name:string,
    price:number,
    model:string,

}

const BasketItem: React.FC<Props>  = ({id,name,price,model}:Props) =>{
    const dispatch = useDispatch();

    return (
        <>
            <li className={styles.list}>
                <div className={styles.name}>{name}</div>
                <div className={styles.model}>{model}</div>
                <div className={styles.price}>{price}$</div>
                <button className={styles.delete} onClick={()=>dispatch(deleteFromBasket(id))}>x</button>
            </li>
        </>
    )
}

export default BasketItem