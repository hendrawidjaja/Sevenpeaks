import React, { useEffect, useState } from "react";
import useContextStore from "../../store/store";

import iconMagnifier from "../../assets/images/icon-magnifier.svg";
import styles from "./search.module.scss";

const Search = () => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const context = useContextStore((state) => state);

  const handleClick = () => {
    setInput("");
    setActive((prev) => !prev);
  };

  useEffect(() => {
    context.updateSearchString(input);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div
      className={`${styles["container"]} ${
        styles[active ? "active" : "inactive"]
      }`}
    >
      <div className={`${styles["wrapper-input"]}`}>
        <input
          type="text"
          placeholder="Search all news"
          defaultValue={input}
          onInput={(e) => setInput(e.target.value)}
        />
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
