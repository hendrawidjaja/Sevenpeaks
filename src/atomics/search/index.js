import React, { useEffect, useState } from "react";

import iconMagnifier from "../../assets/images/icon-magnifier.svg";
import styles from "./search.module.scss";

const Search = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      className={`${styles["container"]} ${
        styles[active ? "active" : "inactive"]
      }`}
    >
      <div className={`${styles["wrapper-input"]}`}>
        <input type="text" placeholder="Search all news" />
      </div>
      <div className={`${styles["wrapper-img"]}`} onClick={() => handleClick()}>
        <img
          className={styles["icon"]}
          src={iconMagnifier}
          alt="icon Magnifier"
        />
      </div>
    </div>
  );
};

export default Search;
