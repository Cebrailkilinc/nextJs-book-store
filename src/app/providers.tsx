//provider.js
"use client";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'


export function Providers({ children }: any) {
  return <Provider store={store}>
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  </Provider>;
}