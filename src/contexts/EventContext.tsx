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
  setHasError: (state: boolean) => void;
  begin: number;
  end: number;
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
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(0);

  function handleGenerateChart() {    
    try {
      const jsonInputData = JSON.parse(inputData);
      const { dataLabels, plotData, begin, end } = extractPlotInformation(jsonInputData);
    
      setLabels(dataLabels);
      setPlotData(plotData);  
      setBegin(begin);
      setEnd(end);
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
        setHasError,
        begin,
        end
      }}
    >
      {props.children}
    </EventContext.Provider>
  );

}
