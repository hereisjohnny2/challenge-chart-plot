import { createObjectListFromMap } from "./createObjectFromMap";
import { extractDataEventsFromJson } from "./extractDataEventsFromJson";
import { extractPlotDataToMap } from "./extractPlotDataToMap";

interface IPlotInformationDTO {
  jsonInputData: unknown[],
  begin: number,
  end: number,
  group: string[],
  select: string[],
}

export function extractPlotInformation({
  jsonInputData,
  begin,
  end,
  group,
  select
}: IPlotInformationDTO) {
  const dataEvents = extractDataEventsFromJson({
    inputData: jsonInputData,
    begin,
    end,
  });
  
  const dataLabels = dataEvents.map(event => new Date(event.timestamp).toISOString());
  
  const dataEventsMap = extractPlotDataToMap({
    dataEvents,
    group: group,
    selectedFields: select
  });

  const plotData = createObjectListFromMap(dataEventsMap)

  return {
    dataLabels,
    plotData,
  }
}