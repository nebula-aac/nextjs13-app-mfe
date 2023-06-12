import { Flex, FlexProps } from "@chakra-ui/react";
import { Fragment } from "react";

export default function Footer(props: FlexProps) {
    return (
        <Fragment>
            <Flex as={"footer"} py={"8rem"} {...props} />
        </Fragment>
    )
}