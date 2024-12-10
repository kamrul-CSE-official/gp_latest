"use client";

import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastContainer } from "react-toastify";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Providers;
