"use client"
import { useSelector } from "react-redux";
import BasketItem from "@/components/BasketItem";
import MyForm from "@/components/FormModal";
import { useCallback, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import styles from '../styles/basket.module.scss';


export default function Basket(){
  const basket= useSelector(state=>state.phone.basket);
  
  
    return (
        <div className={styles.wrapp}>
      
        {!basket.length ? <div style={{'margin': '30px 0 0 20px'}}>Basket is empty!</div> 
        :  
         <ul>
        {basket.map((item)=> (<BasketItem key ={item.id} {...item}/>
          ))}
        </ul>
        }
        {basket.length ? <MyForm/> : null}

        </div>
    )
  }
