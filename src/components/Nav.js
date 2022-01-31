import React from "react";
import styles from "./Nav.module.css";
import SearchIcon from "@material-ui/icons/Search";
const Nav = ({ onChange, info }) => {
  return (
    <nav>
      <h1>🍔 Recipe Finder</h1>
      <div className={styles.search}>
        <input type="text" onChange={onChange} placeholder="Search Recipe" />
        <button onClick={info} className={styles.navButton}>
          <SearchIcon className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
