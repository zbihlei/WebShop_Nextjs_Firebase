"use client"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import BasketItem from "@/components/BasketItem";
import MyForm from "@/components/FormModal";
import styles from '../styles/basket.module.scss';
import { postBasket } from "@/services/postBasket";
import { clearBasket } from "@/store/goodsSlice";
import AfterOrder from '@/components/AfterOrder';
import { RootState } from "@/store/index";


export default function Basket(){
  const [ordered, setOrdered] = useState(false);
  const basket= useSelector((state:RootState)=>state.goods.basket);
  const dispatch = useDispatch()

  const handleSubmit = async (client: any) =>{
    await postBasket({client,basket}, 'orders')
      .then(()=>dispatch(clearBasket()))
      .then(()=>setOrdered(true));
  }
  
  
    return (
        <div className={styles.wrapp}>
        
        {ordered ? <AfterOrder/> : null}
        {!basket.length && !ordered ? <div style={{'margin': '30px 0 0 20px'}}>Basket is empty!</div> 
        :  
         <ul>
        {basket.map((item:any)=> (<BasketItem key ={item.id} {...item}/>
          ))}
        </ul>
        }
        {basket.length ? <MyForm handleSubmit={handleSubmit}/> : null}

        </div>
    )
  }
