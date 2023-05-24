"use client"
import { FormEventHandler, useState } from "react";
import styles from '@/app/styles/search.module.scss';

const Search = ({getBySearch, onSearch})=>{

    
    const [search, setSearch] = useState("");

    const handleSubmit : FormEventHandler<HTMLFormElement> = (event)=>{
        event.preventDefault();
        const goods = getBySearch(search);
         onSearch(goods);
    }
    return (
        <form className={styles.searchform} onSubmit={handleSubmit}>
             <button className={styles.searchbtn} type="submit">search</button>
            <input className={styles.searchinput} type="search"
             placeholder="phone model..." 
             value={search} 
             onChange={(event) => {setSearch(event.target.value); getBySearch()}} />
        </form>
    )
}

export {Search};