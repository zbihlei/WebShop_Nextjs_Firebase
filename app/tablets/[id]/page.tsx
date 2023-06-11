"use client"
import styles from '../../styles/good.module.scss';
import { getItem } from '@/services/getGoods';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGoods, addToBasket } from '@/store/goodsSlice';
import YouBuyIT from '@/components/BuyMessage';


type Props = {
    params: {
        id: string,
    }
}

export default function Phone({params} : Props){

    const tablet = useSelector(state => state.goods);
    const dispatch = useDispatch();
    const [buy, setBuy] = useState(false);

    const addOrder  = (item) => { 
        setBuy(true);
        dispatch(addToBasket([
            {
                id: item.id,
                category:item.category,
                name: item.name,
                model: item.model,
                photo: item.photo,
                price: item.price
            },
        ],
    ));

    };

    const onRequest=()=>{
        setBuy(false);
        getItem("tablets",params.id)
        .then((data)=>{
            dispatch(setGoods({
                id: params.id,
                category: data.category,
                name: data.name,
                model: data.model,
                description:data.description,
                photo: data.photo,
                price: data.price
            }))
        })
    }
    useEffect(()=>{
         onRequest();
    },[])

    return (
    <>
    <div className={styles.wrapp}>
        {buy ? <YouBuyIT good = {tablet}/> :  <>

        <img src={tablet.photo} alt={tablet.name} className={styles.photo} />
        <div className={styles.name}>{tablet.name} {tablet.model}</div>
        <div className={styles.description}>{tablet.description}</div>
        <div className={styles.buy}><button className={styles.buybtn} onClick={()=>{
            addOrder({id: params.id,
                    category: tablet.category,
                     name: tablet.name,
                     model: tablet.model,
                     photo:tablet.photo,
                     price: tablet.price})}}>BUY {tablet.price}$</button></div>
        </>}
        </div> 
    </>
    )
}
