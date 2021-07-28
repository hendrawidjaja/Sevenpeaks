import React, { useEffect, useState } from "react";
import { useFetch } from "../../atomics/fetcher";
import DetailView from "../../components/details-view";
import Dropdown from "../../atomics/dropdown";
import LoadingRing from "../../atomics/loading";
import ViewBookmark from "../../atomics/view-bookmark";

import iconBack from "../../assets/images/icon-back.svg";

import styles from "./main.module.scss";

const API_KEY = `${process.env.REACT_APP_GUARDIAN_KEY}`;
const URL = `https://content.guardianapis.com/search?page=1&q=news&api-key=${API_KEY}&show-fields=thumbnail&show-blocks=all`;

const Main = () => {
  const { status, data, error } = useFetch(URL);
  const [query, setQuery] = useState();

  const [detailPage, setDetailPage] = useState();

  useEffect(() => {
    data && setQuery(data?.response?.results);

    return () => {};
  }, [data]);

  const handleClick = (item) => {
    setDetailPage(item);
  };

  return (
    <section className={`${styles["container"]}`}>
      {detailPage !== undefined && (
        <div className={`${styles["wrapper-button"]}`}>
          <img
            onClick={() => handleClick(undefined)}
            src={iconBack}
            alt="icon-back"
          />
        </div>
      )}

      {detailPage === undefined && (
        <>
          <div className={`${styles["wrapper-header"]}`}>
            <h2 className={`${styles["header"]}`}>Top Stories</h2>

            <div className={styles["wrapper-filter"]}>
              <ViewBookmark />

              <div className={`${styles["wrapper-dropdown"]}`}>
                <Dropdown />
              </div>
            </div>
          </div>

          {status === "idle" && (
            <div> Let's get started by searching for an article! </div>
          )}
          {status === "error" && <div>{error}</div>}
          {status === "fetching" && (
            <div className={`${styles["content-loading"]}`}>
              <LoadingRing />
            </div>
          )}
          {(status === "fetched" || status === "ok") && (
            <main className={`${styles["content"]}`}>
              <ul className={`${styles[`list-item`]}`}>
                {query?.map((items, index) => {
                  //console.log(items);
                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(items)}
                      className={`${styles[`item`]} ${styles[`item-${index}`]}`}
                    >
                      <div className={`${styles["content-img-title"]}`}>
                        {items.fields?.thumbnail && (
                          <img src={items.fields?.thumbnail} alt="thumbnail" />
                        )}

                        <div className={`${styles["content-title"]}`}>
                          <p className={`${styles["title"]}`}>
                            {items?.webTitle}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </main>
          )}
        </>
      )}

      {detailPage !== undefined && <DetailView data={detailPage} />}
    </section>
  );
};

export default Main;
