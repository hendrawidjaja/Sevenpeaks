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
    <div className={`${styles["container"]}`} onClick={() => handleClick()}>
      <img
        className={`${styles["img"]}`}
        src={active ? iconOff : iconOn}
        alt="icon-bookmark"
      />
    </div>
  );
};

export default Bookmark;
