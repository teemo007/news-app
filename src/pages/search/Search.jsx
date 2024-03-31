import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import noFound from "../../assets/no-results.png";
import useSearch from "../../hooks/useSearch";
import Spinner from "../../components/spinner/Spinner";

const Search = () => {
  const { state } = useLocation();
  const { news, error, loading, darkMode } = useSearch(state);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "green" : "white",
      }}
    >
      {loading ? (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      ) : error ? (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <h1>Error: {error}</h1>
        </div>
      ) : (
        <div className={styles.serachPage}>
          <h1>
            News About: <span>{state?.toUpperCase()}</span>
          </h1>
          <div className={styles.searchNews}>
            {news?.length < 1 && (
              <div className={styles.noFound}>
                <img src={noFound} alt="noFound" className={styles.img} />
                <h1>The searched word did not match</h1>
              </div>
            )}
            {news &&
              news.map((item, index) => <NewsCard key={index} {...item} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
