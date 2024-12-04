"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastContainer, toast } from "react-toastify";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
 

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default Providers;
