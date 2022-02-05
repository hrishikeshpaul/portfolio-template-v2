import { FC } from "react";

interface Props {
    id: string;
    title: string;
    year: string;
    type: string;
    live: string;
    github: string;
    tags: string[];
    description: string;
    blog: string;
    image: string;
}

export const FeaturedProjectCard: FC<Props> = ({
    id,
    title,
    year,
    type,
    live,
    github,
    tags,
    description,
    blog,
    image,
}) => {
    return <>{id}</>;
};
