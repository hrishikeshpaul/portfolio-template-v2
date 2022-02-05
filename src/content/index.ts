import { useEffect, useState } from "react";

import common from "content/common/common.json";
import landing from "content/landing/landing-config.json";

import LandingMd from "content/landing/landing.md";

export const configs = {
    common,
    landing,
};

interface State {
    landing: string;
}

export enum ContentFile {
    Landing,
}

const Mapper = {
    [ContentFile.Landing]: LandingMd,
};

export const useContent = (fileName: ContentFile) => {
    const [data, setData] = useState<State>({ landing: "" });

    useEffect(() => {
        fetch(Mapper[fileName])
            .then((res) => res.text())
            .then((text) => setData((data) => ({ ...data, landing: text })));
    }, [fileName]);

    return data;
};
