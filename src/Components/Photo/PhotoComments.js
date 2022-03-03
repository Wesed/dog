import React from 'react'
import { UserContext } from './../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {

  const [comments, setComments] = React.useState(() => props.comments);
  const {login} = React.useContext(UserContext);

  return (
    <>
      <ul className={styles.nome}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      <div>{login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}</div>
    </>
  );
}

export default PhotoComments;