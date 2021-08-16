import SplitPane from "react-split-pane";
import { ChartContainer } from "../ChartContainer";
import { TextEditor } from "../TextEditor";

export function Main() {
  return(
    <main>
      <SplitPane 
        split="horizontal" 
        minSize={200}
        style={{"position": "unset"}}
      >
        <TextEditor />
        <ChartContainer />
      </SplitPane>
    </main>
  );
}