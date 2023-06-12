import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";

const links = [
    { href: "https://vercel.com/home", label: "Vercel.sh" },
    { href: "https://github.com/vercel/next.js", label: "GitHub" },
].map((link, index) => {
    return { ...link, key: `nav-link-${index}` };
});

const MenuItems = (props) => {
    const { children, isLast, to = "/", ...rest } = props
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            color='blue.400'
            _hover={{ color: 'blue.500' }}
            display={"block"}
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Text>
    )
}

export default function Header(props) {
    const [show, setShow] = useState<boolean>(false)
    return (
        <Fragment>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                bg={["primary.500", "primary.500", "transparent", "transparent"]}
                color={["white", "white", "primary.700", "primary.700"]}
                {...props}
            >
                <Box
                    display={{ base: show ? "block" : "none", md: "block" }}
                    flexBasis={{ base: "100%", md: "auto" }}
                >
                    <Flex
                        align={["center", "center", "center", "center"]}
                        justify={["center", "space-between", "flex-end", "flex-end"]}
                        direction={["column", "row", "row", "row"]}
                        pt={[4, 4, 0, 0]}
                    >
                        <MenuItems to="/">Home</MenuItems>
                        <MenuItems to="/shop">Shop</MenuItems>
                        <MenuItems to="/checkout">Checkout</MenuItems>
                        {links.map(({ key, href, label }) => (
                            <MenuItems key={key} href={href}>
                                {label}
                            </MenuItems>
                        ))}
                    </Flex>

                </Box>
            </Flex>
        </Fragment>
    )
}