import styles from "./styles/styles.module.scss";

export function Footer() {
  return (
    <footer contentEditable className={styles.container}>
      <button type="submit">GENERATE CHART</button>
    </footer>
  );
}