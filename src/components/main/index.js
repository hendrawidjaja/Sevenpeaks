import React, { useEffect } from "react";
import Bookmark from "../../atomics/bookmark";
import Dropdown from "../../atomics/dropdown";
import { useFetch } from "../../atomics/fetcher";
import LoadingRing from "../../atomics/loading";

import styles from "./main.module.scss";

const url =
  "https://content.guardianapis.com/search?page=1&q=news&api-key=4a893e95-07ad-4f94-9ff3-e8672dfe8c25";

const Main = () => {
  const { status, data, error } = useFetch(url);

  useEffect(() => {
    data && console.log("25", data);

    return () => {};
  }, [data]);

  return (
    <section className={`${styles["container"]}`}>
      <div className={`${styles["wrapper-header"]}`}>
        <h2 className={`${styles["header"]}`}>Top Stories</h2>

        <div className={styles["wrapper-filter"]}>
          <div className={`${styles["wrapper-bookmark"]}`}>
            <Bookmark />
          </div>

          <div className={`${styles["wrapper-dropdown"]}`}>
            <Dropdown />
          </div>
        </div>
      </div>

      <main className={`${styles["wrapper-content"]}`}>
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
          <>
            <div className={styles["content"]}>
              <LoadingRing />
            </div>
          </>
        )}
      </main>
    </section>
  );
};

export default Main;
