import React from "react";
import styles from "./Navbar.module.css";

function SearchField({ dishesFilter }) {
  const handleOnChange = (event) => {
    dishesFilter(event.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        onChange={handleOnChange}
        placeholder="Search dishes..."
      />
    </>
  );
}

export default SearchField;
