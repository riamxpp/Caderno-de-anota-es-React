import React from 'react';
import styles from './Input.module.css';

const Input = ({label, id, type, setValue, value, ...props}) => {

  return <>
    {label && <label htmlFor={id}>{label}</label> }
    <input 
      type={type} 
      name={id} 
      id={id} 
      value={value}
      onChange={({target}) => setValue(target.value)} 
      className={styles.input}
      {...props}
    ></input>
  </>
}

export default Input
