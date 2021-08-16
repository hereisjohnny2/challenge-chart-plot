import { createContext, ReactNode, useState } from "react";
import { extractPlotInformation } from "../services/utils/extractPlotInformation";

type EventContextProps = {
  inputData: string;
  setInputData: (value: string) => void;
  plotData: PlotDataType[];
  labels: string[];
  handleGenerateChart: () => void;
  errorMessage: string;
  hasError: boolean;
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
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleGenerateChart() {    
    try {
      const jsonInputData = JSON.parse(inputData);
      const { dataLabels, plotData } = extractPlotInformation(jsonInputData);
    
      setLabels(dataLabels);
      setPlotData(plotData);  
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
    }   
  }

  return (
    <EventContext.Provider
      value = {{
        inputData,
        setInputData,
        plotData,
        labels,
        handleGenerateChart,
        hasError,
        errorMessage,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );

}
