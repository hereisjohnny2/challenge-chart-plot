import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import Styles from "./styles/styles.module.scss";

export function ChartContainer() {
  const options: ApexOptions = { }
  const series = [
    {
      name: "series1",
      data: [31, 120 ,10, 28]
    }
  ];

  return(
    <div className={Styles.container}>
      <Chart 
        type="line"
        height="100%"
        options={options}
        series={series}
      />
    </div>
  );
}