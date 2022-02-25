import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import {ReactComponent as Dogs} from '../Assets/dogs.svg';
import {UserContext} from '../UserContext';

const Header = () => {

  const {data, userLogout} = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link  className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs/>
        </Link>
        {/* data inicia como null, portanto 
        SE data existe, exibe o nome do usuario
        SENAO EXISTE, exibe login / criar */}
        {data ? 
        <Link className={styles.login} to="login">
          {data.nome}
        </Link>
        : 
        // aparece msm se tiver logado, ja que demora 2s pra fazer a validacao. Talvez criar um transition q demore 2s pra aparecer pra 'camuflar' e evitar q apareça 'login' mesmo estando logado
        // 2s e suficiente pra verificar se tem login ou n
        <Link className={styles.login} to="login">Login | Criar login</Link>}
      </nav>
    </header>
  )
}

export default Header;