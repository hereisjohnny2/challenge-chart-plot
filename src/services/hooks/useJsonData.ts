import { useContext } from "react";
import { JSONDataContext } from "../../contexts/JSONDataContext";

export function useJsonData() {
  const context = useContext(JSONDataContext);
  return context;  
}