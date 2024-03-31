import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { search } from "../data/searchOpenAi";
import { apple } from "../data/searchApple";
import { chelsea } from "../data/searchChelsea";

const useSearch = (input) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState("");
  const [error, setError] = useState(null);
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  // const url = `https://newsapi.org/v2/top-headlines?q=${input}&apiKey=${apiKey}`;
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(url)
  //     .then((res) => {
  //       setStatusCode(res.status);
  //       /*  if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       } */
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setNews(data.articles);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //       setError(`${statusCode} Failed to fetch news. Please try again later.`);
  //       setLoading(false);
  //     });
  // }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        let myDataArray = [];
        switch (input) {
          case "openai":
            myDataArray = await getDataArray(search);
            break;
          case "open":
            myDataArray = await getDataArray(search);
            break;
          case "ai":
            myDataArray = await getDataArray(search);
            break;
          case "chelsea":
            myDataArray = await getDataArray(chelsea);
            break;
          case "apple":
            myDataArray = await getDataArray(apple);
            break;

          default:
            break;
        }
        setNews(myDataArray);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(` Failed to fetch news. Please try again later.`);
        setLoading(false);
      }
    };
    fetchData();
  }, [input]);

  const getDataArray = (myDataArray) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(myDataArray);
      }, 1000);
    });
  };

  return { news, error, loading, darkMode };
};
export default useSearch;
