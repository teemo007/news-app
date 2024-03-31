import { useState } from "react";
import styles from "./Slider.module.css";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import newsCover from "../../assets/newsCover.png";

const Slider = ({ sliderNews }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderNews.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderNews) || length <= 0) {
    return null;
  }
  return (
    <div className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left} onClick={prevSlide} />
      <FaArrowCircleRight className={styles.right} onClick={nextSlide} />
      {sliderNews.map((item, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className={styles.container}>
                <img
                  src={item.urlToImage ? item.urlToImage : newsCover}
                  className={styles.img}
                />
                <h3>{item.title}</h3>
                <div className={styles.link}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Detail
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
