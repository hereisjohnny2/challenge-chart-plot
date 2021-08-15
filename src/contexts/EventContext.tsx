import { createContext, ReactNode, useState } from "react";
import { createObjectListFromMap } from "../services/utils/createObjectFromMap";
import { extractDataEventsFromJson } from "../services/utils/extractDataEventsFromJson";
import { extractPlotDataToMap } from "../services/utils/extractPlotDataToMap";

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

    const { select, group } = jsonInputData.find(event => event.type === "start");
    const { begin, end } = jsonInputData.find(event => event.type === "span");

    const dataEvents = extractDataEventsFromJson({
      inputData: jsonInputData,
      begin,
      end
    });
    
    const dataLabels = dataEvents.map(event => new Date(event.timestamp).toISOString());
    setLabels(dataLabels);
    
    const dataEventsMap = extractPlotDataToMap({
      dataEvents,
      group,
      selectedFields: select
    });

    setPlotData(createObjectListFromMap(dataEventsMap));    
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
