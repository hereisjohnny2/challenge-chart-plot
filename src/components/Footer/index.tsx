import { useJsonData } from "../../services/hooks/useJsonData";
import styles from "./styles/styles.module.scss";

export function Footer() {
  const { handleGenerateChart } = useJsonData();
  
  return (
    <footer className={styles.container}>
      <button 
        type="button"
        onClick={handleGenerateChart}
      >GENERATE CHART</button>
    </footer>
  );
}