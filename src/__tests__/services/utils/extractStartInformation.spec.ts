import { extractStartInformation } from "../../../services/utils/extractStartInformation";

describe("Extract Start Information", () => {
  let input: unknown[];
  
  it("should be able to extract start information for selected and groups field", () => {
    input = [
      { 
        type: 'start', 
        timestamp: 1519780251000,
        group: ["test_group"],
        select: ["selection_group"]
      },
    ]
    const startInformation = extractStartInformation(input);
    expect(startInformation.group).toEqual(["test_group"]);
    expect(startInformation.select).toEqual(["selection_group"]);
  });

  it("should throw if input has no start information", () => {
    expect(() => {
      extractStartInformation([])
    }).toThrowError();
  });
});