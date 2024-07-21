import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
    return (
        <Box minH={"100vh"} bg={"#202020"} color={"#fff"}>
            <Header />
            <Outlet />
        </Box>
    );
}
