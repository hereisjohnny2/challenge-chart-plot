import { createContext, ReactNode, useState } from "react";

type JSONDataContextProps = {
  data: string;
  setData: (value: string) => void;
  plotData: PlotDataType[];
  setPlotData: (plotData: PlotDataType[]) => void;
  handleGenerateChart: () => void;
}

type JSONDataProviderProps = {
  children: ReactNode;
}

type PlotDataType = {
  name: string;
  data: number[];
}

export const JSONDataContext = createContext({} as JSONDataContextProps);

export function JSONDataProvider(props: JSONDataProviderProps) {
  const [data, setData] = useState("");
  const [plotData, setPlotData] = useState<PlotDataType[]>([]);

  function handleGenerateChart() {
    const eventsList = data.split("\n").map(event => {
      return JSON.parse(event);
    });

    const dataEvents = eventsList.filter(event => event.type === "data");

    const dataPoints = dataEvents.map(point => {
      point
    });

    console.log(dataEvents);    
  }

  return (
    <JSONDataContext.Provider
      value = {{
        data,
        setData,
        plotData,
        setPlotData,
        handleGenerateChart,
      }}
    >
      {props.children}
    </JSONDataContext.Provider>
  );

}
