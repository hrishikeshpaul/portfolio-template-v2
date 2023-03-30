import { FC } from "react";

import { Box, Link } from "@chakra-ui/react";

import { ArticleTitle } from "pages/about/common/title/Title";
import { configs } from "shared/content/Content";

export const Blog: FC = () => {
    return (
        <>
            <ArticleTitle title="Blog" />
            <br />
            {configs.about.blog.map((item) => (
                <Box py="2" key={item.id}>
                    <Link href={item.link} target="_blank" variant="link">
                        {item.title}
                    </Link>
                </Box>
            ))}
        </>
    );
};
