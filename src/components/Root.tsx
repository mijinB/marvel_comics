import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
    return (
        <Box h={"100%"} bg={"#202020"} color={"#fff"}>
            <Header />
            <Outlet />
        </Box>
    );
}
