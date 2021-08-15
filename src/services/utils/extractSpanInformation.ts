export function extractSpanInformation(input: unknown[]) {
  const spanInformation = input.find(event => event["type"] === "span");

  if (!spanInformation) {
    throw new Error("Input should have start information for select and group fields");
  } 

  return {
    begin: spanInformation["begin"],
    end: spanInformation["end"],
  }
}