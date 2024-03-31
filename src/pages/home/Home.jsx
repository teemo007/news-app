import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";

import ChangeTheme from "../../components/theme/ChangeTheme";
import useNews from "../../hooks/useNews";
import { useEffect } from "react";

const Home = () => {
  const { news, loading, darkMode } = useNews("", "us");
  const sliderNews = news?.slice(0, 3);
  useEffect(() => {}, [darkMode]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: darkMode ? "green" : "white",
        transition: "background-color 0.3s ease-in-out",
        transitionDelay: "0.2s",
      }}
    >
      <ChangeTheme />
      <div className={styles.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={styles.news}>
        {loading && <Spinner />}
        {news?.map((item, index) =>
          index > 2 ? <NewsCard key={index} {...item} /> : ""
        )}
      </div>
    </div>
  );
};

export default Home;
