import { useEffect, useState } from "react";

export default function useMousePointer() {
    const [position, setPosition] = useState({ x: 0, y: 0});

    const handleEvent = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleEvent)
        return () => window.removeEventListener('mousemove', handleEvent)
    }, []) 

    return position;
}

