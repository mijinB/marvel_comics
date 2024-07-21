import { HStack, Image } from "@chakra-ui/react";
import LogoImg from "../assets/images/marvel_logo.png";

export default function Header() {
    return (
        <HStack justifyContent={"center"} padding={"10px 0"} borderBottom={"1px solid #393939"}>
            <Image src={LogoImg} alt="logo" w={130} />
        </HStack>
    );
}
