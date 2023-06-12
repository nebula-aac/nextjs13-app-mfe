import { Flex, Heading } from "@chakra-ui/react";

export default function Hero({ title }: { title: string }) {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
            bgClip="text"
        >
            <Heading fontSize="6vw">{title}</Heading>
        </Flex>
    )
}

Hero.defaultProps = {
    title: 'Welcome to Next.js Homepage'
}