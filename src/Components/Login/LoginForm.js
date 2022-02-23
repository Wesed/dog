import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Form/Button';
import Input from './../Form/Input';
import useForm from './../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from './../Helper/Error';
import styles from './LoginForm.module.css'
import stylesBtn from '../Form/Button.module.css'

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const {userLogin, error, loading} = React.useContext(UserContext);

   async function handleSubmit(e) {
    e.preventDefault();
    // so faz o fetch se ambos os campos estiverem validados
    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    };
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name='username' label='Usuário' type='text' {...username}/>
        <Input name='password' label='Senha' type='password' {...password}/>
        {/* loading e true enquanto faz o fetch 
        pra evitar clicar x vezes, desabilita enquanto carrega*/}
        {loading ? 
          <Button disabled>Carregando..</Button>
          : 
          <Button>Entrar</Button>
        }
        <Error error={error} />
      </form>
      <Link className={styles.perdeu}to="/login/perdeu"> Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link  className={stylesBtn.button} to="/login/criar">Cadastro
        </Link>
      </div>
    </section>
  )
}

export default LoginForm;