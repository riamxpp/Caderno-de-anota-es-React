import React from "react";
import AllNotes from "./AllNotes";
import styles from "./Notes.module.css";
import Note from "./Note";

const Notes = () => {
  const [categoria, setCategoria] = React.useState("");
  const [note, setNote] = React.useState("");
  const [form, setForm] = React.useState(false);
  const [allNotes, setAllNotes] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [search, setSearch] = React.useState("");

  return (
    <section className={`${styles.notes} container`}>
      <AllNotes
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        index={index}
        search={search}
        setSearch={setSearch}
      />
      <Note
        setCategoria={setCategoria}
        categoria={categoria}
        note={note}
        setNote={setNote}
        setForm={setForm}
        form={form}
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        setIndex={setIndex}
        index={index}
      />
    </section>
  );
};

export default Notes;
