import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const savedState = localStorage.getItem(key) || null;
        return savedState ? JSON.parse(savedState) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}