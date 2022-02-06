import { FC } from "react";

import { Button } from "@chakra-ui/react";

import { open } from "utils/Functions";
import { LinkIcon } from "utils/Icons";

interface Props {
    demo: string;
}

export const LiveDemo: FC<Props> = ({ demo }) => {
    return (
        <Button variant="link" leftIcon={<LinkIcon fontSize="14pt" />} onClick={() => open(demo)}>
            Live Demo
        </Button>
    );
};
