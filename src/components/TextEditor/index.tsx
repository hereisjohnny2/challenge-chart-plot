import "ace-builds";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";

import { useEvent } from "../../services/hooks/useEvent";

export function TextEditor() {
  const { inputData, setInputData } = useEvent();

  return(
    <AceEditor
      value={inputData}
      onChange={(value, event) => setInputData(value)}
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