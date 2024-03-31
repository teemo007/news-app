import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.topUL}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className={styles.bottomUL}>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "business" } })
            }
          >
            Business
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "entertainment" } })
            }
          >
            Entertainment
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "general" } })
            }
            style={{pointerEvents:"none"}}
          >
            General
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "health" } })
            }
            style={{pointerEvents:"none"}}
          >
            Health
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "science" } })
            }
            style={{pointerEvents:"none"}}
          >
            Science
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "sports" } })
            }
            style={{pointerEvents:"none"}}
          >
            Sports
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "technology" } })
            }
          >
            Technology
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
