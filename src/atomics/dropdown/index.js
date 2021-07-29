import React, { useEffect, useState } from "react";
import useContextStore from "../../store/store";

import styles from "./dropdown.module.scss";

import { DROPDOWN } from "../../constant/index";
const { NEW, OLD, POP } = DROPDOWN;

const Dropdown = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState(NEW);

  const context = useContextStore((state) => state);

  const handleClickSelect = () => {
    setActive((prev) => !prev);
  };

  const handleClick = (id) => {
    setActive((prev) => !prev);
    setName(id);
  };

  useEffect(() => {
    context.updateSortActive(name);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className={`${styles["container"]}`}>
      <div
        className={`${styles["custom-select"]} ${styles[active ? "open" : ""]}`}
      >
        <div
          className={`${styles["custom-select-trigger"]}`}
          onClick={() => handleClickSelect()}
        >
          <span className={`${styles["title"]}`}>{name}</span>
          <div className={`${styles["arrow"]}`}></div>
        </div>

        <ul className={`${styles["custom-options"]}`}>
          {name !== NEW && (
            <li
              onClick={() => handleClick(NEW)}
              className={`${styles["custom-option"]}`}
              data-value={NEW}
            >
              <p>{NEW}</p>
            </li>
          )}

          {name !== OLD && (
            <li
              onClick={() => handleClick(OLD)}
              className={`${styles["custom-option"]}`}
              data-value={OLD}
            >
              <p>{OLD}</p>
            </li>
          )}

          {name !== POP && (
            <li
              onClick={() => handleClick(POP)}
              className={`${styles["custom-option"]} `}
              data-value={POP}
            >
              <p>{POP}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
