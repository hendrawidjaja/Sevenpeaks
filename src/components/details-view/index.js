import React, { useContext, useEffect, useState } from "react";
import { ACTIONS, BookContext } from "../../store/context";

import { useStore } from "../../store/store";

import iconBookmarkOn from "../../assets/images/icon-bookmarkon.svg";
import iconBookmarkOff from "../../assets/images/icon-bookmarkoff.svg";
import styles from "./detail-view.module.scss";

function padValue(value) {
  return value < 10 ? "0" + value : value;
}

function formatDate(dateVal) {
  const newDate = new Date(dateVal);
  const _month = padValue(newDate.getMonth() + 1);
  const _day = padValue(newDate.getDate());
  const _year = newDate.getFullYear();
  let _hour = newDate.getHours();
  let _minute = padValue(newDate.getMinutes());
  let _AMPM = "AM";

  let iHourCheck = parseInt(_hour);

  if (iHourCheck > 12) {
    _AMPM = "PM";
    _hour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    _hour = "12";
  }

  _hour = padValue(_hour);

  return `${_month} ${_day} ${_year} ${_hour}:${_minute} ${_AMPM}`;
}

const DetailView = ({ data }) => {
  const [bookmark, setBookmark] = useState(false);
  const { state, dispatch } = useContext(BookContext);

  const handleClick = (object) => {
    setBookmark((prev) => !prev);

    dispatch({ type: ACTIONS.ADD, payload: object });
  };

  useEffect(() => {
    console.log(state);
    return () => {};
  }, [state]);

  return (
    <section className={`${styles["container"]}`}>
      <div
        className={`${styles["wrapper-bookmark"]}`}
        onClick={() => handleClick(data)}
      >
        <div className={`${styles["wrapper-bookmark-image"]}`}>
          <img src={bookmark ? iconBookmarkOn : iconBookmarkOff} alt="" />
        </div>
        <div className={`${styles["wrapper-bookmark-text"]}`}>
          <p>ADD BOOKMARK</p>
        </div>
      </div>
      <div className={`${styles["wrapper-date"]}`}>
        <p className={`${styles["date"]}`}>
          {formatDate(data.webPublicationDate)}
        </p>
      </div>

      <main className={`${styles["content"]}`}>
        <h1 className={`${styles["title"]}`}>{data?.webTitle}</h1>

        <div className={`${styles["wrapper-content"]}`}>
          <div className={`${styles["content-text"]}`}>
            <div
              className={`${styles["wrapper-text"]}`}
              dangerouslySetInnerHTML={{
                __html: data?.blocks?.body[0]?.bodyHtml,
              }}
            ></div>
          </div>
          <div
            className={`${styles["content-image"]}`}
            dangerouslySetInnerHTML={{
              __html: data?.blocks.main.bodyHtml,
            }}
          ></div>
        </div>
      </main>
    </section>
  );
};

export default DetailView;
