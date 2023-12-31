import { Flex } from "@chakra-ui/react";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";

export default function LandingLayout(props: any) {
    return (
        <Flex
            direction={"column"}
            align={"center"}
            maxW={{ "xl": "1200px" }}
            m={"0 auto"}
            {...props}>
            <Header />
            {props.children}
            <Footer />
        </Flex>
    )
}