"use client"
import { useSelector } from "react-redux";
import BasketItem from "@/components/BasketItem";


export default function Basket(){
    const basket= useSelector(state=>state.phone.basket);

    return (
        <>
        <h3>basket page</h3>
        {!basket.length ? <div style={{'margin': '30px 0 0 20px'}}>Basket is empty!</div> 
        :  
         <ul>
        {basket.map((item)=> (<BasketItem key ={item.id} {...item}/>
          ))}
        </ul>
        }
        </>
    )
}