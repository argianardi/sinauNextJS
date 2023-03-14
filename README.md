## React Query:

1. Query --> http method GET
2. Mutation --> http method POST
3. Cache --> temporary storage

### Setup React Query

Berikut ini adalah langkah-langkah untuk setup Provider & DevTools React Query di Next.js:

1. Install React Query, dilakukan dengan command

   ```
   npm install react-query
   ```

2. Buka file `_app.js` yang tersimpan di direktori `pages/_app.js` dan setup provider React Query

   ```
   import "@/styles/globals.css";
   import { ChakraProvider, theme } from "@chakra-ui/react";
   import { QueryClient, QueryClientProvider } from "react-query";
   import { ReactQueryDevtools } from "react-query/devtools";
   const queryClient = new QueryClient();

   export default function App({ Component, pageProps }) {
        return (
            <QueryClientProvider client={queryClient}>
                <ChakraProvider resetCSS={true} theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            <ReactQueryDevtools />
            </QueryClientProvider>
        );
   }
   ```
