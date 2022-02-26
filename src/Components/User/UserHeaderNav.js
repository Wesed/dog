import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import UseMedia from './../../Hooks/UseMedia';

const UserHeaderNav = () => {

  const {userLogout} = React.useContext(UserContext);
  const mobile = UseMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  // sempre que o pathname mudar (clicar em algum menu), fecha o menu
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
  <>    
    {mobile && (
    <button 
    aria-label="Menu"
    // so vai ter a class mobileButtonActive se for true
    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
    // efeito toggle
    onClick={() => setMobileMenu(!mobileMenu)}
    ></button>)}

    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive} `}>
      <NavLink to="/conta" end>
        <MinhasFotos/>
        {mobile && 'Minhas fotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <Estatisticas/>
        {mobile && 'Estatísticas'}
      </NavLink>

      <NavLink to="/conta/postar">
        <AdicionarFoto/>
        {mobile && 'Adicionar Fotos'}
      </NavLink>

      <button onClick={userLogout}>
        <Sair/>
        {mobile && 'Sair'}
      </button>
    </nav>
  </>
  )
}

export default UserHeaderNav;