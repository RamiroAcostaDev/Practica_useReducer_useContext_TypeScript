"use client";
import { createContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  primerNumero: 0,
  segundoNumero: 0,
  resultado: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PRIMER_NUMERO":
      return (state = { ...state, primerNumero: action.payload });
    case "SEGUNDO_NUMERO":
      return (state = { ...state, segundoNumero: action.payload });
    case "CALCULAR":
      return (state = {
        ...state,
        resultado: parseInt(state.primerNumero) + parseInt(state.segundoNumero),
      });
    default:
      return state;
  }
};

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider };
export { DataContext };
