import React from "react";

import styles from "./view-bookmark.module.scss";

const ViewBookmark = () => {
  const handleClick = () => {};

  return (
    <div className={`${styles["container"]}`} onClick={() => handleClick()}>
      <p className={`${styles["text"]}`}>VIEW BOOKMARK</p>
    </div>
  );
};

export default ViewBookmark;
