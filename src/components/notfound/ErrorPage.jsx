import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css"
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id={styles.errorPage}>
      <h1>Oops!</h1>
      <p className={styles.p}>Sorry, an unexpected error has occurred.</p>
      <p className={styles.p}>
        <i>{error.statusText || error.message}</i>
      </p>
      <div ><a href="/" className={styles.a}>Home</a></div>
    </div>
  );
};

export default ErrorPage;
