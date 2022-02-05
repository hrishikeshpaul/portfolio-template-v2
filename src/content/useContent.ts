import { useEffect, useState } from "react";

import LandingMd from "content/landing/landing.md";
import LandingConfig from "content/landing/landing-config.json";


interface State {
    landing: string;
}

export const useContent = () => {
    const [data, setData] = useState<State>({ landing: "" });

    useEffect(() => {
        fetch(LandingMd)
            .then((res) => res.text())
            .then((text) => setData({ ...data, landing: text }));
    }, []);

    return data;
};
