"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { DataContext } from "../contexts/DataContextProvider";

const Contador = () => {
  const { state, dispatch } = useContext(DataContext);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={10}
        gap={2}
      >
        <Box display={"flex"} justifyContent={"center"} gap={2}>
          <label>Primer numero</label>
          <input
            type="number"
            onChange={(e) =>
              dispatch({ type: "PRIMER_NUMERO", payload: e.target.value })
            }
          />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={2}>
          <label>Segundo numero</label>
          <input
            type="number"
            onChange={(e) =>
              dispatch({ type: "SEGUNDO_NUMERO", payload: e.target.value })
            }
          />
        </Box>
        <button onClick={() => dispatch({ type: "CALCULAR" })}>Sumar</button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={10}
        gap={2}
      >
        <p>{state.resultado}</p>
      </Box>
    </>
  );
};

export default Contador;
