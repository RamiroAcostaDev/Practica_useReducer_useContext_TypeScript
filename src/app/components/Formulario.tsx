import Box from "@mui/material/Box";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const Formulario = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  const { dispatch } = context;
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={2}
      mt={5}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <label htmlFor="">Primer Numero</label>
        <input
          type="number"
          onChange={(e) =>
            dispatch({ type: "PRIMER_NUMERO", payload: e.target.value })
          }
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <label htmlFor="">Segundo numero</label>
        <input
          type="number"
          onChange={(e) =>
            dispatch({ type: "SEGUNDO_NUMERO", payload: e.target.value })
          }
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <label htmlFor="">Quiere multiplicar?</label>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "MULTIPLICAR" })}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <label htmlFor="">Quiere dividir??</label>
        <input type="checkbox" onChange={() => dispatch({ type: "DIVIDIR" })} />
      </Box>
      <button onClick={() => dispatch({ type: "CALCULAR" })}>Calcular</button>
    </Box>
  );
};

export default Formulario;
