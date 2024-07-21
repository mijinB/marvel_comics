import { useQuery } from "@tanstack/react-query";
import { listComics } from "../api";
import { ComicsResponse } from "../types";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Comics() {
    const { isLoading, data } = useQuery<ComicsResponse>({
        queryKey: ["comics"],
        queryFn: listComics,
    });
    const dataList = data?.data.results;

    return (
        <Grid templateColumns={"repeat(5, 1fr)"} columnGap={5} rowGap={10} padding={"40px 15%"}>
            {dataList?.map((item) => (
                <Link to={`/comics/${item.id}`} key={item.id}>
                    <Box
                        position={"relative"}
                        _hover={{
                            "& img": {
                                opacity: 0.3,
                            },
                            "&::after": {
                                display: "block",
                                position: "absolute",
                                zIndex: 1,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "80%",
                                fontSize: "20px",
                                textAlign: "center",
                                content: `"go detail page 👉"`,
                            },
                        }}
                    >
                        <Image
                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            alt="thumbnail"
                            w={"100%"}
                            h={370}
                            borderRadius={15}
                            backgroundPosition={"right"}
                            objectFit={"cover"}
                        />
                        <Text marginTop={3} fontSize={"md"} fontWeight={600}>
                            {item.title}
                        </Text>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
}
