import { useQuery } from "@tanstack/react-query";
import { listComics } from "../api";
import { ComicsResponse } from "../types";
import { Grid, Image } from "@chakra-ui/react";

export default function Home() {
    const { isLoading, data } = useQuery<ComicsResponse>({
        queryKey: ["comics"],
        queryFn: listComics,
    });
    console.log(data?.data.results);

    return (
        <Grid templateColumns={"repeat(5, 1fr)"} gap={5} padding={"0 15%"}>
            {data?.data.results.map((item) => (
                <Image
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt="thumbnail"
                    w={"100%"}
                    h={370}
                    objectFit={"cover"}
                    backgroundPosition={"right"}
                />
            ))}
        </Grid>
    );
}
