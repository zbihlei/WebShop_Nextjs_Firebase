import { useState } from "react";
import styles from '../../app/styles/authform.module.scss'

const Form = ({ title, handleClick }: { title: string; handleClick: (email: string, password: string) => void; }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.formauth}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </div>
  );
}

export { Form };