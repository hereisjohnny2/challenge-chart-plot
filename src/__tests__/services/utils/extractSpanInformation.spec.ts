import { extractSpanInformation } from "../../../services/utils/extractSpanInformation";

describe("Extract Span Information", () => {
  let input: unknown[];
  
  it("should be able to extract start information for selected and groups field", () => {
    input = [
      { 
        type: 'span', 
        timestamp: 1519780251000,
        begin: 1519780251000,
        end: 1519780251000
      },
    ]
    const spanInformation = extractSpanInformation(input);
    expect(spanInformation.begin).toEqual(1519780251000);
    expect(spanInformation.end).toEqual(1519780251000);
  });

  it("should throw if input has no start information", () => {
    expect(() => {
      extractSpanInformation([])
    }).toThrowError();
  });
});