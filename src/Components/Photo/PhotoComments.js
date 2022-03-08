import React from 'react'
import { UserContext } from './../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {

  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const {login} = React.useContext(UserContext);

  // o scroll inicia la em baixo sempre q add um comentario novo 
  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      <div>{login && <PhotoCommentsForm 
      single={props.single} 
      id={props.id} 
      setComments={setComments}/>}</div>
    </>
  );
}

export default PhotoComments;