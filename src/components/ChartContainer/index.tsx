import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import Styles from "./styles/styles.module.scss";
import { useEvent } from "../../services/hooks/useEvent";

export function ChartContainer() {
  const { plotData, labels, begin, end } = useEvent();
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
      min: begin,
      max: end,
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