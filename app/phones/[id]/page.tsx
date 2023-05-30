"use client"
import styles from '../../styles/phone.module.scss';
import { getPhone } from '@/services/getPhones';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPhone, addToBasket } from '@/store/phoneSlice';
import YouBuyIT from '@/components/Youbuyit';
import Link from 'next/link';

type Props = {
    params: {
        id: string,
    }
}


export default function Phone({params} : Props){

    const phone = useSelector(state => state.phone);
    const dispatch = useDispatch();
    const [buy, setBuy] = useState(false);

    //add to order with quantity
    // const addNewOrder = (goodsItem) => {
        
    //     let quantity = 1;
    
    //     const indexInOrder = order.findIndex(
    //         (item) => item.id === goodsItem.id
    //     );
    
    //     if (indexInOrder > -1) {
    //         quantity = order[indexInOrder].quantity + 1;
    
    //         dispatch(addToBasket(order.map((item) => {
    //                 if (item.id !== goodsItem.id) return item;
    
    //                 return {
    //                     id: item.id,
    //                     name: item.name,
    //                     model: item.model,
    //                     price: item.price,
    //                     quantity,
    //                 };
    //             }),
    //         ));
    //     } else {
    //         dispatch(addToBasket([
    //                 ...order,
    //                 {
    //                     id: goodsItem.id,
    //                     name: goodsItem.name,
    //                     model: goodsItem.model,
    //                     price: goodsItem.price,
    //                     quantity,
    //                 },
    //             ],
    //         ));
    //     }
    
       
    // };

    const addOrder  = (item) => { 
        setBuy(true);
        dispatch(addToBasket([
            {
                id: item.id,
                name: item.name,
                model: item.model,
                price: item.price,  
            },
        ],
    ));

    };

    const onRequest=()=>{
        setBuy(false);
        getPhone("phones",params.id)
        .then((data)=>{
            dispatch(setPhone({
                id: params.id,
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
        {buy ? <YouBuyIT phone = {phone}/> :  <>

        <img src={phone.photo} alt={phone.name} className={styles.photo} />
        <div className={styles.name}>{phone.name} {phone.model}</div>
        <div className={styles.description}>{phone.description}</div>
        <div className={styles.buy}><button className={styles.buybtn} onClick={()=>{addOrder({id: params.id, name: phone.name ,model: phone.model ,price: phone.price})}}>BUY {phone.price}$</button></div>
        </>}
        </div> 
    </>
    )
}
