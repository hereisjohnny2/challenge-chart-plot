import { extractDataEventsFromJson } from "./extractDataEventsFromJson";

describe("Extract Data Events From Json Function", () => {
  let inputData: any[];
  let begin: number;
  let end: number;

  beforeEach(() => {
    inputData = [
      { 
        type: 'start', 
        timestamp: 1519780251000,
        group: ["test_group"],
        select: ["selection_group"]
      },
      { 
        type: 'span', 
        timestamp: 1519780251000, 
        begin: 1519780250000,
        end: 1519780251000
      },
      { 
        type: 'data', 
        timestamp: 1519780251000, 
        os: 'linux', 
        browser: 'chrome', 
        min_response_time: 0.1, 
        max_response_time: 1.3,
      }
    ];

    begin = 1519780250000;
    end = 1519780252000;
  });  
  
  it("should be able to filter the input data", () => {
    const filteredData = extractDataEventsFromJson({
      inputData,
      begin,
      end,
    });

    expect(filteredData).toHaveLength(1);
    expect(filteredData[0]).toMatchObject({ 
        type: 'data', 
        timestamp: 1519780251000, 
        os: 'linux', 
        browser: 'chrome', 
        min_response_time: 0.1, 
        max_response_time: 1.3,
      }
    )
  });
});