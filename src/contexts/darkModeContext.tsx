import { createContext, useReducer } from "react";
import  DarkModeReducer  from "./darkModeReducer";

export type DarkModeType = {
    darkMode: boolean;
};

const INITIAL_STATE : any = {
    darkMode: false
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({children}:{children : JSX.Element}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
          {children}
        </DarkModeContext.Provider>
      );
};