interface IDataEventsFromJson {
  inputData: any[];
  begin: number;
  end: number;
}

export function extractDataEventsFromJson({
  inputData,
  begin,
  end
}: IDataEventsFromJson) {
  const dataEvents = inputData.filter(event => {
    return event.type === "data" && event.timestamp >= begin && event.timestamp <= end;
  });

  return dataEvents;
}