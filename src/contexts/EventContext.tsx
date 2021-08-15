import { createContext, ReactNode, useState } from "react";
import { extractPlotInformation } from "../services/utils/extractPlotInformation";
import { extractSpanInformation } from "../services/utils/extractSpanInformation";
import { extractStartInformation } from "../services/utils/extractStartInformation";

type EventContextProps = {
  inputData: string;
  setInputData: (value: string) => void;
  plotData: PlotDataType[];
  labels: string[];
  handleGenerateChart: () => void;
}

type EventProviderProps = {
  children: ReactNode;
}

type PlotDataType = {
  name: string;
  data: number[];
}

export const EventContext = createContext({} as EventContextProps);

export function EventProvider(props: EventProviderProps) {
  const [inputData, setInputData] = useState("");
  const [plotData, setPlotData] = useState<PlotDataType[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  function handleGenerateChart() {
    const jsonInputData = inputData.split("\n").map(event => {
      return JSON.parse(event);
    });

    const { group, select } = extractStartInformation(jsonInputData);
    const { begin, end } = extractSpanInformation(jsonInputData);

    const { dataLabels, plotData } = extractPlotInformation({
      jsonInputData,
      begin,
      end,
      group,
      select
    });
    
    setLabels(dataLabels);
    setPlotData(plotData);    
  }

  return (
    <EventContext.Provider
      value = {{
        inputData,
        setInputData,
        plotData,
        labels,
        handleGenerateChart,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );

}
