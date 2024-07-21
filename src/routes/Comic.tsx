import { ComicDetailResponse, IShowComicCharacters } from "../types";
import { comicDetail } from "../api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";

export default function Comic() {
    const { comicId } = useParams();
    const navigate = useNavigate();
    const { isLoading, data } = useQuery<ComicDetailResponse>({
        queryKey: ["comicId", comicId],
        queryFn: comicDetail,
    });
    const detailData = data?.data.results[0];

    const showComicCharacters = ({ e, id }: IShowComicCharacters) => {
        e.preventDefault();
        navigate(`/comics/${id}/characters`);
    };

    return (
        <Box h={"100%"} padding={"50px 0"}>
            <VStack>
                <Text fontSize={"2xl"} fontWeight={900}>
                    {detailData?.title}
                </Text>
                <HStack gap={8} w={"40%"} padding={"50px 0"}>
                    <Image
                        src={`${detailData?.images[0].path}.${detailData?.images[0].extension}`}
                        alt="comic img"
                        w={300}
                    />
                    <VStack alignItems={"flex-start"} gap={10}>
                        <Text fontSize={"md"}>
                            {detailData?.description !== "" ? detailData?.description : "No description"}
                        </Text>
                        <VStack alignItems={"flex-start"} gap={0} color={"#9e9e9e"}>
                            {detailData?.creators.items.map((creator, index) => (
                                <Text key={index} fontSize={"sm"}>{`${creator.role} : ${creator.name}`}</Text>
                            ))}
                        </VStack>
                        <Button
                            onClick={(e) => showComicCharacters({ e: e, id: `${comicId}` })}
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
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
}
