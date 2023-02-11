"use client";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </>
  );
}
