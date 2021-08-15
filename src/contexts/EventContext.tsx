import { createContext, ReactNode, useState } from "react";

type EventContextProps = {
  data: string;
  setData: (value: string) => void;
  plotData: PlotDataType[];
  setPlotData: (plotData: PlotDataType[]) => void;
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
  const [data, setData] = useState("");
  const [plotData, setPlotData] = useState<PlotDataType[]>([]);

  function handleGenerateChart() {
    const eventsList = data.split("\n").map(event => {
      return JSON.parse(event);
    });

    const dataEvents = eventsList.filter(event => event.type === "data");

    const dataPoints = dataEvents.map(point => {
      
    });

    console.log(dataEvents);    
  }

  return (
    <EventContext.Provider
      value = {{
        data,
        setData,
        plotData,
        setPlotData,
        handleGenerateChart,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );

}
