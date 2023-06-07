"use client"
import styles from '../../styles/good.module.scss';
import { getItem } from '@/services/getGoods';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGoods, addToBasket } from '@/store/goodsSlice';
import YouBuyIT from '@/components/Youbuyit';


type Props = {
    params: {
        id: string,
    }
}


export default function Phone({params} : Props){

    const phone = useSelector(state => state.goods);
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
        getItem("phones",params.id)
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
        {buy ? <YouBuyIT good = {phone}/> :  <>

        <img src={phone.photo} alt={phone.name} className={styles.photo} />
        <div className={styles.name}>{phone.name} {phone.model}</div>
        <div className={styles.description}>{phone.description}</div>
        <div className={styles.buy}><button className={styles.buybtn} onClick={()=>{
            addOrder({id: params.id,
                    category: phone.category,
                     name: phone.name,
                     model: phone.model,
                     photo:phone.photo,
                     price: phone.price})}}>BUY {phone.price}$</button></div>
        </>}
        </div> 
    </>
    )
}
