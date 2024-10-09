import styles from "../Home.module.css";
export default function Heading() {
  return (
    <div className={styles.headingDiv}>
      <div className={styles.banner}>
        <h1>The world of Entia</h1>
      </div>
      <div className={styles.credit}>
        Photo by{" "}
        <a href="https://unsplash.com/@vincentiu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Vincentiu Solomon
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/silhouette-photo-of-mountain-during-night-time-ln5drpv_ImI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
}
