import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import Styles from "./styles/styles.module.scss";
import { useEvent } from "../../services/hooks/useEvent";

export function ChartContainer() {
  const { plotData, labels } = useEvent();
  const options: ApexOptions = { 
    legend: {
      position: "right",
    },
    chart: {
      toolbar: {
        show: false
      },
    },
    xaxis: {
      type: "datetime",
      categories: labels,
    },
  }

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