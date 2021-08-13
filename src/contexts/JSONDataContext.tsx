import { createContext, ReactNode, useState } from "react";

type JSONDataContextProps = {
  data: string;
  setData: (value: string) => void;
  handleGenerateChart: () => void;
}

type JSONDataProviderProps = {
  children: ReactNode;
}

export const JSONDataContext = createContext({} as JSONDataContextProps);

export function JSONDataProvider(props: JSONDataProviderProps) {
  const [data, setData] = useState("");

  function handleGenerateChart() {
    console.log(data);
    
  }

  return (
    <JSONDataContext.Provider
      value = {{
        data,
        setData,
        handleGenerateChart,
      }}
    >
      {props.children}
    </JSONDataContext.Provider>
  );

}
