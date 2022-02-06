import { FC } from "react";

import { Button } from "@chakra-ui/react";

import { open } from "utils/Functions";
import { ArrowRightIcon } from "utils/Icons";

interface Props {
    link: string;
}

export const ReadMore: FC<Props> = ({ link }) => {
    return (
        <Button
            variant="link"
            colorScheme="black"
            rightIcon={<ArrowRightIcon fontSize="16pt" />}
            onClick={() => open(link)}
        >
            Read More
        </Button>
    );
};
