import { useQuery } from "@tanstack/react-query";
import { listComics } from "../api";
import { ComicsResponse } from "../types";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

export default function Home() {
    const { isLoading, data } = useQuery<ComicsResponse>({
        queryKey: ["comics"],
        queryFn: listComics,
    });
    console.log(data?.data.results);

    return (
        <Grid templateColumns={"repeat(5, 1fr)"} columnGap={5} rowGap={10} padding={"40px 15%"}>
            {data?.data.results.map((item) => (
                <Box>
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
            ))}
        </Grid>
    );
}
