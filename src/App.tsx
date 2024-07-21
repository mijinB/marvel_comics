/* import axios from "axios";
import md5 from "md5";

function App() {
    const apiKey = "057059055a025c91b9e4a38a224f317e";
    const secretKey = "deb726458581d1cc43baba040fdc8273b223465c";
    const currentTime = new Date().getTime();
    const md5Key = md5(currentTime + secretKey + apiKey);

    const params = {
        apikey: apiKey,
        ts: currentTime,
        hash: md5Key,
    };

    const response = axios.get("http://gateway.marvel.com/v1/public/comics", { params });

    console.log(response.data.data.results);
    return <h1>test</h1>;
}

export default App; */

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const queryClient = new QueryClient();

export default function App() {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}
