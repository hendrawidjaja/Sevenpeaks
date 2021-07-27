import React, { useContext } from "react";
import Search from "../../atomics/search";

import logo from "../../assets/images/Logo_White.png";

import styles from "./navbar.module.scss";
import { MyContext } from "../../context";

const NavBar = () => {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["container"]}>
        <a className={styles["wrapper-img"]} href="/">
          <img className={styles["img"]} src={logo} alt="logo" />
        </a>
        <Search />
      </div>
    </nav>
  );
};

export default NavBar;
