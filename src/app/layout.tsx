import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DataContextProvider } from "./contexts/DataContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practica useReducer + useContext",
  description: "Practica useReducer + useContext",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataContextProvider>{children}</DataContextProvider>
      </body>
    </html>
  );
}
