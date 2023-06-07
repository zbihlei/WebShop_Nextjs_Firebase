"use client"
import styles from '../../styles/good.module.scss';
import { getItem } from '@/services/getGoods';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setGoods, addToBasket} from '@/store/goodsSlice';
// import { setLaptop } from '@/store/laptopSlice'; //change
// import { addToBasket } from '@/store/phoneSlice'; //change
import YouBuyIT from '@/components/Youbuyit';

type Props = {
    params: {
        id: string,
    }
}

export default function Laptop({params} : Props){

    const laptop = useSelector(state => state.goods);
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
        getItem('laptops',params.id)
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
        {buy ? <YouBuyIT good = {laptop}/> :  <>

        <img src={laptop.photo} alt={laptop.name} className={styles.photo} />
        <div className={styles.name}>{laptop.name} {laptop.model}</div>
        <div className={styles.description}>{laptop.description}</div>
        <div className={styles.buy}><button className={styles.buybtn} onClick={()=>{
            addOrder({id: params.id,
                     category: laptop.category,
                     name: laptop.name,
                     model: laptop.model,
                     photo:laptop.photo,
                     price: laptop.price})}}>BUY {laptop.price}$</button></div>
        </>}
        </div> 
    </>
    )
}
