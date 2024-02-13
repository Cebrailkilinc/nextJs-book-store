//provider.js
"use client";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export function Providers({ children }: any) {
  const queryClient = new QueryClient()
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  </Provider>;
}