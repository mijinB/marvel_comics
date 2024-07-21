import { Button, HStack, Image } from "@chakra-ui/react";
import LogoImg from "../assets/images/marvel_logo.png";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const showCharacters = () => {
        navigate(`/characters`);
    };

    return (
        <HStack justifyContent={"center"} position={"relative"} padding={"10px 0"} borderBottom={"1px solid #393939"}>
            <Image src={LogoImg} alt="logo" w={130} />
            <Button
                onClick={showCharacters}
                position={"absolute"}
                top={"50%"}
                right={"20px"}
                zIndex={2}
                transform={"translateY(-50%)"}
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
        </HStack>
    );
}
