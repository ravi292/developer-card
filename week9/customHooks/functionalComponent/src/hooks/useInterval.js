import { useEffect } from "react";

export default function useInterval(cb, n) {
    useEffect(() => {
        const id = setInterval(() => {
            cb();
        }, n*1000);
        return () => clearInterval(id);
    }, [cb, n])
}
