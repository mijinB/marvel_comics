import { ComicDetailResponse } from "../types";
import { comicDetail } from "../api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Comic() {
    const { comicId } = useParams();
    const { isLoading, data } = useQuery<ComicDetailResponse>({
        queryKey: ["comicId", comicId],
        queryFn: comicDetail,
    });
    const detailData = data?.data.results[0];
    console.log(detailData);

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
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
}
