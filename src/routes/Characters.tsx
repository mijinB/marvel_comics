import { useQuery } from "@tanstack/react-query";
import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { listCharacters } from "../api";
import { CharactersResponse } from "../types";
import { Link } from "react-router-dom";

export default function Characters() {
    const { isLoading, data } = useQuery<CharactersResponse>({
        queryKey: ["characters"],
        queryFn: listCharacters,
    });
    const dataList = data?.data.results;
    console.log(dataList);

    return (
        <VStack>
            <Text mt={8} mb={5} fontSize={"3xl"} fontWeight={900}>
                Characters
            </Text>
            <Grid templateColumns={"repeat(5, 1fr)"} columnGap={5} rowGap={10} mb={10} padding={"0 15%"}>
                {dataList?.map((item) => (
                    <Link to={`/characters/${item.id}`} key={item.id}>
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
                                    width: "85%",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    content: `"About this character 👉"`,
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
                                {item.name}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
        </VStack>
    );
}
