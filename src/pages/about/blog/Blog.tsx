import { FC } from "react";

import { Box, Link } from "@chakra-ui/react";

import { ArticleTitle } from "pages/about/common/title/Title";
import {useTranslation} from "react-i18next";

interface BlogProps {
    id: string;
    title: string;
    link: string;
}

export const Blog: FC = () => {
    const {t} = useTranslation('about');
    const blogs = t('blog', { returnObjects: true}) as Array<BlogProps>;

    return (
        <>
            <ArticleTitle title="Blog" />
            <br />
            {blogs.map((item) => (
                <Box py="2" key={item.id}>
                    <Link href={item.link} target="_blank" variant="link">
                        {item.title}
                    </Link>
                </Box>
            ))}
        </>
    );
};
