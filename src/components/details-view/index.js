import React, { useContext, useEffect, useState } from "react";
import { ACTIONS, BookContext } from "../../store/context";

import iconBookmarkOn from "../../assets/images/icon-bookmarkon.svg";
import iconBookmarkOff from "../../assets/images/icon-bookmarkoff.svg";
import styles from "./detail-view.module.scss";

function padValue(value) {
  return value < 10 ? "0" + value : value;
}
function formatDate(dateVal) {
  const newDate = new Date(dateVal);
  const sMonth = padValue(newDate.getMonth() + 1);
  const sDay = padValue(newDate.getDate());
  const sYear = newDate.getFullYear();
  let sHour = newDate.getHours();
  let sMinute = padValue(newDate.getMinutes());
  let sAMPM = "AM";

  let iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
    sAMPM = "PM";
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = "12";
  }

  sHour = padValue(sHour);

  return `${sMonth} ${sDay} ${sYear} ${sHour}:${sMinute} ${sAMPM}`;
}

const DetailView = ({ data }) => {
  const [bookmark, setBookmark] = useState(false);
  const { dispatch } = useContext(BookContext);

  const handleClick = (object) => {
    setBookmark((prev) => !prev);

    if (bookmark) {
      dispatch({ type: ACTIONS.REMOVE, payload: {} });
    }

    if (!bookmark) {
      dispatch({ type: ACTIONS.ADD, payload: object });
    }
  };

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
