interface IDataEventsFromJson {
  input: unknown[];
  begin: number;
  end: number;
}

export function extractDataEventsFromJson({
  input,
  begin,
  end
}: IDataEventsFromJson) {
  const dataEvents = input.filter(event => {
    return event["type"] === "data" && event["timestamp"] >= begin && event["timestamp"] <= end;
  });

  return dataEvents;
}