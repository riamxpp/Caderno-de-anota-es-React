import React from "react";
import Input from "./Forms/Input";
import styles from "./SearchNote.module.css";

const SeacrhNote = ({ search, setSearch }) => {
  return (
    <div className={styles.seacrhNote}>
      <Input
        label="Find your note"
        className={styles.input}
        type="search"
        id="search"
        setValue={setSearch}
        value={search}
      />
      {/* <button className={styles.button}>Search</button> */}
    </div>
  );
};

// export default itensFiltrados;
export default SeacrhNote;
