import React from "react";

import styles from "./view-bookmark.module.scss";

const ViewBookmark = () => {
  const handleClick = () => {
    console.log("123");
  };

  return (
    <div className={`${styles["container"]}`} onClick={() => handleClick()}>
      <p className={`${styles["text"]}`}>VIEW BOOKMARK</p>
    </div>
  );
};

export default ViewBookmark;
