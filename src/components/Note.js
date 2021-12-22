import React from "react";
import Input from "./Forms/Input";
import useDate from "./Hooks/useDate";
import styles from "./Note.module.css";

const Note = ({
  categoria,
  setCategoria,
  note,
  setNote,
  setForm,
  setAllNotes,
  allNotes,
  setIndex,
  index,
}) => {
  const date = useDate();

  function handleSubmit(event) {
    setForm(true);
    setAllNotes([...allNotes, [categoria, note, index]]);
    setIndex(index + 1);
    setCategoria("");
    setNote("");

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.note}>
      <h2 className={styles.myNote}>My Note</h2>
      <Input
        id="categoria"
        label="Categoria"
        value={categoria}
        setValue={setCategoria}
      />
      <time className={styles.time}>{date}</time>
      <textarea
        value={note}
        onChange={({ target }) => setNote(target.value)}
        className={styles.textarea}
      />
      <button title="Busca baseada nas anotações." className={styles.button}>
        Anotar
      </button>
    </form>
  );
};

export default Note;
