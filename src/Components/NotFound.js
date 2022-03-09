import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h3>Página não encontrada :(</h3>
      <Link className={styles.homeLink} to={'/'}>Ir para a página inicial</Link>
    </div>
  )
}

export default NotFound;