import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import useNews from "../../hooks/useNews";

const Categories = () => {
  const { state } = useLocation();
  const { category } = state;
  const { news, loading, countries, handleSelected, handleSubmit } =
    useNews(category);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="country">Choose a country:</label>
          <select name="country" id="country" onChange={handleSelected}>
            {countries.map((item, index) => (
              <option
                key={index}
                value={item}
                disabled={item === "hk" || item === "us" ? false : true}
                style={{
                  backgroundColor: item === "hk" || item === "us" ? "blue" : "",
                }}
              >
                {item.toUpperCase()}
              </option>
            ))}
          </select>
          <button type="submit">Filter Country</button>
        </form>
      </div>
      <div className={styles.right}>
        {loading && <Spinner />}
        {!loading &&
          news.map((item, index) => {
            return <NewsCard key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Categories;
