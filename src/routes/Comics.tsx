import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { listComics } from "../api";
import { ComicsResponse, IShowComicCharacters } from "../types";

export default function Comics() {
    const navigate = useNavigate();
    const { isLoading, data } = useQuery<ComicsResponse>({
        queryKey: ["comics"],
        queryFn: listComics,
    });
    const dataList = data?.data.results;

    const showComicCharacters = ({ e, id }: IShowComicCharacters) => {
        e.preventDefault();
        navigate(`/comics/${id}/characters`);
    };

    return (
        <VStack>
            <Text mt={8} mb={5} fontSize={"3xl"} fontWeight={900}>
                Comics
            </Text>
            <Grid templateColumns={"repeat(5, 1fr)"} columnGap={5} rowGap={10} w={"70%"} mb={10}>
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
                                    width: "85%",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    content: `"Go to Details Page 👉"`,
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
                            <Button
                                onClick={(e) => showComicCharacters({ e: e, id: `${item.id}` })}
                                position={"absolute"}
                                top={3}
                                right={3}
                                zIndex={2}
                                w={"50px"}
                                h={"50px"}
                                borderRadius={"50%"}
                                backgroundColor={"rgba(57, 57, 57, 0.7)"}
                                _hover={{
                                    backgroundColor: "rgba(145, 145, 145, 0.7)",
                                }}
                            >
                                <FaUserFriends color={"#fff"} />
                            </Button>
                            <Text marginTop={3} fontSize={"md"} fontWeight={600}>
                                {item.title}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
        </VStack>
    );
}
