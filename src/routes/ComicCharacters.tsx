import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { listComicCharacters } from "../api";
import { CharactersResponse } from "../types";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function ComicCharacters() {
    const { comicId } = useParams();
    const { isLoading, data } = useQuery<CharactersResponse>({
        queryKey: ["comicCharacters", comicId],
        queryFn: listComicCharacters,
    });
    const characters = data?.data.results;
    console.log(characters);

    return (
        <VStack>
            <Text mt={8} mb={5} fontSize={"3xl"} fontWeight={900}>
                Comic Characters
            </Text>
            <VStack alignItems={"center"} gap={10} w={"30%"}>
                {characters === undefined || characters.length === 0 ? (
                    <Text>No Characters Info</Text>
                ) : (
                    characters.map((character) => (
                        <VStack>
                            <Image
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt="character img"
                                w={150}
                                h={150}
                                borderRadius={"50%"}
                            />
                            <VStack>
                                <Text fontSize={"xl"} fontWeight={600}>
                                    {character.name}
                                </Text>
                                <Text color={"#9e9e9e"}>
                                    {character?.description !== "" ? character?.description : "No description"}
                                </Text>
                            </VStack>
                        </VStack>
                    ))
                )}
            </VStack>
        </VStack>
    );
}
