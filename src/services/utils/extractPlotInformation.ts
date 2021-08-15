import { createObjectListFromMap } from "./createObjectFromMap";
import { extractDataEventsFromJson } from "./extractDataEventsFromJson";
import { extractPlotDataToMap } from "./extractPlotDataToMap";
import { extractSpanInformation } from "./extractSpanInformation";
import { extractStartInformation } from "./extractStartInformation";

export function extractPlotInformation(input: unknown[]) {
  const { group, select } = extractStartInformation(input);
  const { begin, end } = extractSpanInformation(input);

  const dataEvents = extractDataEventsFromJson({ input, begin, end });
  
  const dataLabels = dataEvents.map(event => {
    if (!event["timestamp"]) {
      throw new Error("Invalid date input or missing date information")
    }
    return new Date(event["timestamp"]).toISOString();
  });
  
  const dataEventsMap = extractPlotDataToMap({ dataEvents, group, select });

  const plotData = createObjectListFromMap(dataEventsMap)

  return {
    dataLabels,
    plotData,
  }
}