import React from 'react'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg';
import useFetch from './../../Hooks/useFetch';
import { COMMENT_POST } from './../../api';
import Error from './../Helper/Error';
import styles from './PhotoCommentsForm.module.css'
const PhotoCommentsForm = ({id, setComments, single}) => {

  const {request, error} = useFetch();

  const [comment, setComment] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const {url, options} = COMMENT_POST(token, id, {comment});
    console.log('aaa', url, 'aq', options);
    const {response, json} = await request(url, options);
    console.log('json', json);
    if(response.ok) {
      // limpa o textArea
      setComment('');
      /* comments vem junto do setComments 
       * aq exibe todos os comentarios anteriores, e 
      * retorna os comments e o comment novo
      */
      setComments((comments) => [...comments, json]);
    }
  }
  
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea  className={styles.textarea}
      id='comment'
      name='comment'
      placeholder='Comente...'
      value={comment}
      onChange={(({target}) => setComment(target.value))}
      />
      <button className={styles.button}> <Enviar/> </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm;