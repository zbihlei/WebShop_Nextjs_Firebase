import { FormEventHandler, useState } from "react";
import styles from '@/app/styles/search.module.scss';

interface Props {
  getBySearch: (search: string) => any;
  onSearch: (goods: any) => void; 
}

const Search: React.FC<Props> = ({ getBySearch, onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const goods = getBySearch(search);
    onSearch(goods);
  };

  return (
    <form className={styles.searchform} onSubmit={handleSubmit}>
      <button className={styles.searchbtn} type="submit">search</button>
      <input
        className={styles.searchinput}
        type="search"
        placeholder="phone model..."
        value={search}
        onChange={(event) => { setSearch(event.target.value); getBySearch(event.target.value); }}
      />
    </form>
  );
}

export { Search };