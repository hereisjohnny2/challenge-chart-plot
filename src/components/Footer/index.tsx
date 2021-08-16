import { useEvent } from "../../services/hooks/useEvent";
import styles from "./styles.module.scss";

export function Footer() {
  const { handleGenerateChart } = useEvent();
  
  return (
    <footer className={styles.container}>
      <button 
        type="button"
        onClick={handleGenerateChart}
      >GENERATE CHART</button>
    </footer>
  );
}