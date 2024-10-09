import styles from "./globalComponents.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link to="/" className={styles.link}>
            Entia
          </Link>
        </p>
      </div>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/atlas" className={styles.link}>
            Atlas
          </Link>
        </li>
      </ul>
    </div>
  );
}
