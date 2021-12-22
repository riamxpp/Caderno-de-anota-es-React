import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ ativaModal, setAtivaModal, apagar }) => {
  const button = React.useRef();

  function handleClick(event) {
    if (
      event.target === event.currentTarget ||
      event.target === button.current
    ) {
      setAtivaModal(false);
    }
  }

  if (!ativaModal) return null;
  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <div className={styles.modal}>
        <div ref={button} className={styles.button}>
          X
        </div>
        <h2>{ativaModal.categoria}</h2>
        <p>{ativaModal.texto}</p>
      </div>
    </div>
  );
};

export default Modal;
