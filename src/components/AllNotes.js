import React from "react";
import styles from "./AllNotes.module.css";
import SeacrhNote from "./SeacrhNote";
import UserNotes from "./UserNotes";

const AllNotes = ({
  allNotes,
  index,
  setAllNotes,
  search,
  setSearch,
  itensFiltrados,
}) => {
  return (
    <section className={styles.allNotes}>
      <SeacrhNote search={search} setSearch={setSearch} allNotes={allNotes} />
      <UserNotes
        search={search}
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        index={index}
        itensFiltrados={itensFiltrados}
      />
    </section>
  );
};

export default AllNotes;
