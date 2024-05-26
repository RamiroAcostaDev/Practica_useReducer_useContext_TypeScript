import Box from "@mui/material/Box";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const Lista = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  const { multiplicacion, division, sumar, restar } = context;

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      m={5}
    >
      <h4>RESULTADOS</h4>
      <p>Suma: {sumar}</p>
      <p>Resta: {restar}</p>
      <p>Multiplicacion: {multiplicacion}</p>
      <p>Division:{division} </p>
    </Box>
  );
};

export default Lista;
