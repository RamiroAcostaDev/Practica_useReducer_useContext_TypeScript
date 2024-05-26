"use client";
import { createContext, useReducer } from "react";

interface DataContextState extends InitialState {
  dispatch: React.Dispatch<Actions>;
}

const DataContext = createContext<DataContextState | null>(null);

interface InitialState {
  primerNumero: number;
  segundoNumero: number;
  sumar: number;
  restar: number;
  multiplicacion: number;
  division: number;
  multiplicarCheck: boolean;
  dividirCheck: boolean;
}
type Actions = {
  type:
    | "PRIMER_NUMERO"
    | "SEGUNDO_NUMERO"
    | "MULTIPLICAR"
    | "DIVIDIR"
    | "CALCULAR";
  payload?: number | boolean | string;
};

type DataContextProviderProps = {
  children: React.ReactNode;
};

const initialState: InitialState = {
  primerNumero: 0,
  segundoNumero: 0,
  sumar: 0,
  restar: 0,
  multiplicarCheck: false,
  dividirCheck: false,
  multiplicacion: 0,
  division: 0,
};

const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case "PRIMER_NUMERO":
      return { ...state, primerNumero: Number(action.payload) };

    case "SEGUNDO_NUMERO":
      return { ...state, segundoNumero: Number(action.payload) };
    case "MULTIPLICAR":
      return { ...state, multiplicarCheck: !state.multiplicarCheck };
    case "DIVIDIR":
      return { ...state, dividirCheck: !state.dividirCheck };
    case "CALCULAR":
      return {
        ...state,
        sumar: sumar(state.primerNumero, state.segundoNumero),
        restar: restar(state.primerNumero, state.segundoNumero),
        multiplicacion: state.multiplicarCheck
          ? multiplicar(state.primerNumero, state.segundoNumero)
          : (state.multiplicacion = 0),
        division: state.dividirCheck
          ? dividir(state.primerNumero, state.segundoNumero)
          : (state.division = 0),
      };
    default:
      return state;
  }
};

const sumar = (a: number, b: number) => a + b;
const restar = (a: number, b: number) => a - b;
const multiplicar = (a: number, b: number) => a * b;

const dividir = (a: number, b: number) => a / b;

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider };
export { DataContext };
