import React, { useContext, useEffect, useState } from 'react'

import { UilAlignJustify } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilBrightness } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilPizzaSlice } from '@iconscout/react-unicons'
import ThemeContext from '../../store/theme/theme.context'



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
                    <div className="py-1">
                        
                    </div>
                    <ul className="hidden sm:flex flex-1 justify-end items-center font-bold gap-12 uppercase text-blue-700 text-lg">
                        <li className="cursor-pointer" onClick={onChangeTheme}>  {darkMode ? <UilPizzaSlice /> : <UilBrightness />}</li>
                    </ul>

                </nav>
                <div className="flex sm:hidden  flex-1 justify-end">
                    <UilAlignJustify />
                </div>
            </header>

        </>

    )
}
