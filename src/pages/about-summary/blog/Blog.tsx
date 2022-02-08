import { FC } from "react";

import { Button, Box } from "@chakra-ui/react";

import { ArticleTitle } from "pages/about-summary/common/title/Title";
import { configs } from "shared/content/Content";

export const Blog: FC = () => {
    return (
        <>
            <ArticleTitle title="Blog" />
            <br />
            {configs.aboutSummary.blog.map((item) => (
                <Box py="2">
                    <Button
                        onClick={() => window.open(item.link, "_blank")}
                        variant="link"
                        key={`blog-item-${item.title}`}
                    >
                        {item.title}
                    </Button>
                </Box>
            ))}
        </>
    );
};
