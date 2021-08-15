interface IDataToMapDTO {
  dataEvents: unknown[];
  group: string[];
  select: string[];
}

function addDataToMap(map: Map<string, number[]>, key: string, value: number) {
  if (map.get(key)) {
    map.set(key, [...map.get(key), value]);
  } else {
    map.set(key, [value]);
  }
}

export function extractPlotDataToMap({
  dataEvents,
  group,
  select
}: IDataToMapDTO): Map<string, number[]> {
  const plotData = new Map<string, number[]>();

  dataEvents.forEach(event => {
    const baseName = group.map(groupField => {
      if (!event[groupField]) {
        throw new Error(`Event has not the ${groupField} group field`); 
      }
      return event[groupField];
    }).join(" ");
  
    select.forEach(field => {
      const key = `${baseName} ${field}`;

      if (!event[field]) {
        throw new Error("Event has not this field");        
      }

      const value = event[field];

      addDataToMap(plotData, key, value);
    });
  });

  return plotData;
}