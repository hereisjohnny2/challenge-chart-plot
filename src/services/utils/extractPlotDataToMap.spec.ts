import { extractPlotDataToMap } from "./extractPlotDataToMap";

describe("Extract Plot Data to Map Function", () => {
  let dataEvents: unknown[];
  let group: string[];
  let selectedFields: string[];

  beforeEach(() => {
    dataEvents = [
      { 
        type: 'data', 
        timestamp: 1519780251000, 
        os: 'linux', 
        browser: 'chrome', 
        min_response_time: 0.1, 
        max_response_time: 1.3,
      },
      { 
        type: 'data', 
        timestamp: 1519780252000, 
        os: 'linux', 
        browser: 'chrome', 
        min_response_time: 0.2, 
        max_response_time: 1.4,
      },
      { 
        type: 'data', 
        timestamp: 1519780253000, 
        os: 'linux', 
        browser: 'chrome', 
        min_response_time: 0.3, 
        max_response_time: 1.4, 
      },
    ];

    group = ["os", "browser"];
    selectedFields = ["min_response_time", "max_response_time"]
  });

  it("should be able to extract data from an event list to a Map structure", () => {
    const extractedData = extractPlotDataToMap({
      dataEvents,
      group,
      selectedFields,
    });    

    const mapKeysIterator = extractedData.keys();

    expect(extractedData.size).toBe(2);
    expect(mapKeysIterator.next().value).toBe("linux chrome min_response_time");
    expect(mapKeysIterator.next().value).toBe("linux chrome max_response_time");
  });

  it("should throw if event has not the required selected field", () => {
    expect(() => {
      extractPlotDataToMap({
        dataEvents,
        group,
        selectedFields: ["fake_field"],
      })}
    ).toThrowError();
  });

  it("should throw if event has not the required group field", () => {
    expect(() => {
      extractPlotDataToMap({
        dataEvents,
        group: ["fake_group_field"],
        selectedFields,
      })}
    ).toThrowError();
  });
});