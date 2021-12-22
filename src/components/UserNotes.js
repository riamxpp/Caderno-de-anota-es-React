import React from "react";
import styles from "./UserNotes.module.css";
import Trash from "../Assets/lixeira.png";
import Modal from "./Modal";
import useDate from "./Hooks/useDate";

const UserNotes = ({ allNotes, setAllNotes, itensFiltrados, search }) => {
  const [ativaModal, setAtivaModal] = React.useState(null);
  const date = useDate();

  function apagaNota(index) {
    allNotes.splice(index, 1);
    setAllNotes([...allNotes]);
    setAtivaModal(null);
  }

  function modalClick(item) {
    setAtivaModal({
      categoria: item[0],
      texto: item[1],
    });
  }

  const filtrados = allNotes.filter((item) =>
    item[0].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Modal ativaModal={ativaModal} setAtivaModal={setAtivaModal} />
      <section className={styles.userNotes}>
        <ul className={styles.singleNote}>
          {allNotes &&
            filtrados.map((item, index) => {
              return (
                <li key={index} title={item[0]}>
                  <button
                    title="Apagar anotação."
                    onClick={() => apagaNota(index)}
                    className={styles.apagar}
                  >
                    <img src={Trash} alt={"Apagar nota"} />
                  </button>
                  <data className={styles.data}>{date}</data>
                  <div
                    onClick={() => modalClick(item, index)}
                    className={styles.wrapper}
                  >
                    <h6>{item[0]}</h6>
                    <span>{item[1]}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default UserNotes;
