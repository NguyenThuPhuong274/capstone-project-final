"use client";

import store from "../redux/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'flowbite';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
     <Provider store={store} >
       <ToastContainer position="bottom-right" />
        {children}
      
     </Provider>
    </ThemeProvider>
  );
}
