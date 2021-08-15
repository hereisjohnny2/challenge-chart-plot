export function extractStartInformation(input: unknown[]) {
  const startInformation = input.find(event => event["type"] === "start");

  if (!startInformation) {
    throw new Error("Input should have start information for select and group fields");
  }

  return {
    group: startInformation["group"],
    select: startInformation["select"],
  }
}