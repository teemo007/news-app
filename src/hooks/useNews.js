import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { main } from "../data/main";
import { business } from "../data/business";
import { tech } from "../data/tech";
import { entertainment } from "../data/entertainment";
import { hkTech } from "../data/hkTech";
import { usBusiness } from "../data/usBusiness";


const useNews = (initialCategory = "", initialCountry = "us") => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState(initialCountry);
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

        let myDataArray = [];
        switch (category) {
          case "business":
            myDataArray = await getDataArray(business);
            break;
          case "entertainment":
            myDataArray = await getDataArray(entertainment);
            break;
          case "technology":
            myDataArray = await getDataArray(tech);
            break;
          default:
            myDataArray = await getDataArray(main);
            break;
        }
        setNews(myDataArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const getDataArray = (myDataArray) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(myDataArray);
      }, 1000);
    });
  };

  useEffect(() => {
    setCategory(initialCategory);
    setCountry(initialCountry);
  }, [initialCategory, initialCountry]);

  const countries = [
    "us",
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "nn",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "ve",
    "za",
  ];
  const handleSelected = (e) => {
    setSelect(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (select === "hk") {
      setNews(hkTech);
    }
    if (select === "us") {
      setNews(main);
    }
    if (select === "us" && category === "business") {
      setNews(usBusiness);
    }
  };
  return {
    news,
    loading,
    category,
    country,
    darkMode,
    countries,
    setCategory,
    setCountry,
    handleSelected,
    handleSubmit,
  };
};
export default useNews;
