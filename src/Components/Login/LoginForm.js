import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Form/Button';
import Input from './../Form/Input';
import useForm from './../../Hooks/useForm';
import { UserContext } from '../../UserContext';

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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name='username' label='Usuário' type='text' {...username}/>
        <Input name='password' label='Senha' type='password' {...password}/>
        {/* loading e true enquanto faz o fetch 
        pra evitar clicar x vezes, desabilita enquanto carrega*/}
        {loading ? 
          <Button disabled>Carregando..</Button>
          : 
          <Button>Entrar</Button>
        }
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;