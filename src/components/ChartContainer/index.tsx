import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import Styles from "./styles/styles.module.scss";
import { useJsonData } from "../../services/hooks/useJsonData";

export function ChartContainer() {
  const { plotData } = useJsonData();
  const options: ApexOptions = { }

  return(
    <div className={Styles.container}>
      <Chart 
        type="line"
        height="100%"
        options={options}
        series={plotData}
      />
    </div>
  );
}