import { useEffect, useState } from "react";
export const useWindowHeight = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    useEffect(() => {
        setWindowHeight(window.innerHeight);
    }, [setWindowHeight]);
    return windowHeight;
};
