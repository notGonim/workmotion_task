import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { addEmployee } from '../../store/employees/employees-actions'


export const Form = () => {


    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [address, setAddress] = useState('')

    const isInvalid = username === '' || name === '' || email === '' || phone === '' || company === '' || address === ''

    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(addEmployee({ name, username, email, address, phone, company }))
        history.push(ROUTES.HOME)
    }

    return (
        <form className="py-4 px-44 flex flex-col mt-5  w-screen font-Poppins" onSubmit={handleLogin} method="POST">
            <div className="px-44 md:flex md:items-center mb-6 ">
                <div className="w-44 flex items-start ">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Username
                    </label>
                </div>
                <div className="w-96">
                    <input value={username} onChange={({ target }) => setUsername(target.value)}
                        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="px-44 md:flex md:items-center mb-6">
                <div className="w-44 flex items-start">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div className="w-96">
                    <input value={name} onChange={({ target }) => setName(target.value)}
                        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="px-44 md:flex md:items-center mb-6">
                <div className="w-44 flex items-start">
                    <label className="block text-gray-500 font-bold  md:text-right mb-1 pr-4" for="inline-full-name">
                        Email
                    </label>
                </div>
                <div className="w-96">
                    <input value={email} onChange={({ target }) => setEmail(target.value)}
                        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="email" />
                </div>
            </div>
            <div className="px-44 md:flex md:items-center mb-6">
                <div className="w-44 flex items-start">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Company Name
                    </label>
                </div>
                <div className="w-96">
                    <input value={company} onChange={({ target }) => setCompany(target.value)}
                        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="px-44 md:flex md:items-center mb-6">
                <div className="w-44 flex items-start">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Address
                    </label>
                </div>
                <div className="w-96">
                    <input value={address} onChange={({ target }) => setAddress(target.value)}
                        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="px-44 md:flex md:items-center mb-6">
                <div className="w-44 flex items-start">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Phone
                    </label>
                </div>
                <div className="w-96">
                    <input value={phone} onChange={({ target }) => setPhone(target.value)}
                        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                        type="number" />
                </div>
            </div>
            <div className="px-10 md:flex justify-end md:items-center mb-6">
                <div className="w-96">
                    <button className={` ${isInvalid && 'opacity-50'} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
                        type="submit" disabled={isInvalid}>
                        Add Employee
                    </button>
                </div>
            </div>
        </form>
    )
}
