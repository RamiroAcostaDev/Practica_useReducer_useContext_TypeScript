"use client";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
    >
      <Formulario />
      <Lista />
    </Box>
  );
}
