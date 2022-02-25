import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();


  async function getUser(token) {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    // conseguiu logar
    setLogin(true);
  }
  
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST({username, password});
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error('Ops! Os dados estão incorretos.');
      const {token} = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token); 
      //assim q faz o login, redireciona a pagina pra 'conta'
      navigate('/conta');
    } catch(err)  {
      setError(err.message);
      console.log('msg', err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  // como vai ser sempre chamada no useEffect, precisa ser um useCallback
  const userLogout =  React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  // verifica se ha dados de login do usuario no localStorage
  React.useEffect(() => {
      async function autoLogin() {
        const token = window.localStorage.getItem('token');
        if(token) {
          try {
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_VALIDATE_POST(token);
            const response = await fetch(url, options);
            if(!response.ok) throw new Error('Token inválido');
            await getUser(token);
          } catch(err) {
            console.log(err);
            //caso ocorra falhas no token, o catch limpa todas as alteracoes
            userLogout();
          } finally {
            setLoading(false);
          }
        } else {
          // senao tiver token e pq nao esta logado, logo login é false
          setLogin(false);
        }
      }
      autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login}}>
      {children}
    </UserContext.Provider>
  )
}