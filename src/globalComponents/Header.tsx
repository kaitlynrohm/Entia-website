import styles from "./globalComponents.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <p>Entia</p>
      <ul className={styles.navbarList}>
        <li>Home</li>
        <li>Atlas</li>
      </ul>
    </div>
  );
}
