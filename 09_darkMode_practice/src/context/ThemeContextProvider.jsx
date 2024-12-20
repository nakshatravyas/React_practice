import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
    const [isDark, setDark] = useState(false)
    const toggleTheme = () => {
        setDark((prev) => !prev)
    }
    useEffect(() => {
        if (isDark) {
            document.querySelector('html').classList.remove('light')
            document.querySelector('html').classList.add('dark')
        }
        else {
            document.querySelector('html').classList.remove('dark')
            document.querySelector('html').classList.add('light')
        }
    }, [isDark])
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider