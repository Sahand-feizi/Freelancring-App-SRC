import { useContext, useEffect } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeContext = createContext()

export default function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(
        'isDarkMode',
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        } else {
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    const context = useContext(DarkModeContext)
    if(context == undefined) 
        throw new Error('the context cold in a bad place')
    
    return context
}