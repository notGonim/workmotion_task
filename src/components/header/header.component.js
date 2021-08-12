import React, { useContext } from 'react'

import { UilAlignJustify } from '@iconscout/react-unicons'
import { UilBrightness } from '@iconscout/react-unicons'
import { UilPizzaSlice } from '@iconscout/react-unicons'
import ThemeContext from '../../store/theme/theme.context'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'



export const Header = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const onChangeTheme = () => {
        setDarkMode(!darkMode)
        localStorage.setItem("darkTheme", !darkMode);
    }

    return (
        <>
            <header className="font-Poppins dark:bg-midnight-blue shadow-sm ">
                <nav className="container items-center relative  flex py-6">
                    <div className="py-1 flex justify-between items-center font-bold  uppercase text-blue-700 dark:text-white text-lg">
                        <ul class="flex">
                            <li className="mr-6">
                                <Link to={ROUTES.HOME} className="cursor-pointer text-blue-500 hover:text-blue-800 dark:text-white" >Home</Link>
                            </li>
                            <li className="mr-6">
                                <Link to={ROUTES.ADD} className="text-blue-500 cursor-pointer hover:text-blue-800 dark:text-white" >Add</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="hidden sm:flex flex-1 justify-end items-center font-bold gap-12 uppercase text-blue-700 text-lg">
                        <li className="cursor-pointer dark:text-white" onClick={onChangeTheme}>  {darkMode ? <UilPizzaSlice /> : <UilBrightness />}</li>
                    </ul>
                </nav>
                <div className="flex sm:hidden  flex-1 justify-end">
                    <UilAlignJustify />
                </div>
            </header>
        </>
    )
}
