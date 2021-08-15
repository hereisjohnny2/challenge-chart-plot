import { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";

export function useEvent() {
  const context = useContext(EventContext);
  return context;  
}