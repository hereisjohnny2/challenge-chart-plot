import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import styles from "./styles/app.module.scss";
import SplitPane from "react-split-pane";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {

}

const series = [
  {
    name: "series1",
    data: [31, 120 ,10, 28]
  }
];

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <SplitPane 
          split="horizontal" 
          minSize={200}
          defaultSize={350}
          style={{"position": "unset"}}
        >
          <AceEditor
            mode="json"
            theme="dracula"
            name="data-editor"
            fontSize="16px"
            height="100%"
            width="100%"
            showPrintMargin={false}
            editorProps={{ $blockScrolling: true }}
          />
          <div>
            <Chart 
              type="line"
              height="100%"
              options={options}
              series={series}
            />
          </div>
        </SplitPane>
      </main>
      <Footer />
    </div>
  );
}

export default App;
