import styles from "./styles/header.module.scss";

export function Header() {
  return(
    <header className={styles.container}>
      <strong>João's Challenge</strong>
    </header>
  );
}