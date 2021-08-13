import "ace-builds";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";

import { useJsonData } from "../../services/hooks/useJsonData";

export function TextEditor() {
  const { data, setData } = useJsonData();

  return(
    <AceEditor
      value={data}
      onChange={(value, event) => setData(value)}
      mode="json"
      theme="dracula"
      name="data-editor"
      fontSize="16px"
      height="100%"
      width="100%"
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
    />                                
  );
}