import React, { useState } from "react";

import iconOn from "../../assets/images/icon-bookmarkon.svg";
import iconOff from "../../assets/images/icon-bookmarkoff.svg";
import styles from "./bookmark.module.scss";

const Bookmark = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`${styles["container"]} ${styles[active ? "active" : ""]}`}
      onClick={() => handleClick()}
    >
      <img
        className={`${styles["img"]}`}
        src={active ? iconOn : iconOff}
        alt="icon-bookmark"
      />
      <p className={`${styles["text"]}`}>VIEW BOOKMARK</p>
    </div>
  );
};

export default Bookmark;
