import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Kyle NEWS</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search for a new. EX: openai, apple, chelsea"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
