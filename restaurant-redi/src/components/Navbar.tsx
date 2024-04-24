import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Sapori d'Italia</h1>
        <div className={styles.decor}></div>
      </div>
    </>
  );
}

export default Navbar;
