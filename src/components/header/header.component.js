import React, { useContext, useEffect, useState } from 'react'

import { UilAlignJustify } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilBrightness } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilPizzaSlice } from '@iconscout/react-unicons'
import ThemeContext from '../../store/theme/theme.context'
import { Link } from 'react-router-dom'



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
                        <Link to='/' className="cursor-pointer px-5"> Home</Link>
                        <Link to='/add' className="cursor-pointer">Add</Link>
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
