import { useParams } from "react-router-dom";
import { CharacterDetailResponse } from "../types";
import { useQuery } from "@tanstack/react-query";
import { characterDetail } from "../api";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Character() {
    const { characterId } = useParams();
    const { isLoading, data } = useQuery<CharacterDetailResponse>({
        queryKey: ["characterId", characterId],
        queryFn: characterDetail,
    });
    const detailData = data?.data.results[0];
    console.log(detailData);

    return (
        <Box h={"100%"} padding={"50px 0"}>
            <VStack>
                <Text fontSize={"2xl"} fontWeight={900}>
                    {detailData?.name}
                </Text>
                <HStack gap={8} w={"40%"} padding={"50px 0"}>
                    <Image
                        src={`${detailData?.thumbnail.path}.${detailData?.thumbnail.extension}`}
                        alt="character img"
                        w={300}
                        borderRadius={15}
                    />
                    <VStack alignItems={"flex-start"} gap={10}>
                        <Text fontSize={"md"}>
                            {detailData?.description !== "" ? detailData?.description : "No description"}
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
}
