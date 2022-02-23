import React from 'react'
import Error from '../Helper/Error';
import styles from './Input.module.css';

const Input = ({name, label, type, value, onChange, error, onBlur}) => {
  return(
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} 
      className={styles.input} 
      type={type} 
      value={value} 
      onChange={onChange}
      onBlur={onBlur}/>
      {/* a msg so aparece se existir error */}
      <Error error={error}/>
    </div>
  );
}

export default Input;