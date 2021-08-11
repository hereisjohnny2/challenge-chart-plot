import styles from "./styles/styles.module.scss";

export function FormFooter() {
  return (
    <footer className={styles.container}>
      <button type="submit">GENERATE CHART</button>
    </footer>
  );
}