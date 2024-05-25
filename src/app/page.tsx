"use client";
import Contador from "./components/Contador";
import { DataContextProvider } from "./contexts/DataContextProvider";

export default function Home() {
  return (
    <DataContextProvider>
      <Contador />
    </DataContextProvider>
  );
}
