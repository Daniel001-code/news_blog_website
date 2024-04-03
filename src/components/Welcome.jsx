import { Link } from "react-router-dom";
import styles from "./welcome.module.css";
export default function Welcome() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h3 className={styles.welcome}>Welcome</h3>
        <p className={styles.info}>
          As a premium member you can create and Post your own blog
        </p>
        <Link to="/create">
          <button className={styles.start}>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
