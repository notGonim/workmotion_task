import { createContext, useState } from 'react'


localStorage.setItem('darkTheme', false)

export const ThemeContext = createContext(
    {
        darkMode: JSON.parse(localStorage.getItem('darkTheme')),
        setDarkMode: () => { }
    }
)


export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkTheme')))
   
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeContext
