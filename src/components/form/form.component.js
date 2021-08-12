import React from 'react'

export const Form = ({txt , classes}) => {

    return (
        <form className="py-4 px-36 flex flex-col mt-5  w-screen font-Poppins">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Username
                    </label>
                </div>
                <div className="w-96">
                    <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div className="w-96">
                    <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Email
                    </label>
                </div>
                <div className="w-96">
                    <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Company Name
                    </label>
                </div>
                <div className="w-96">
                    <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Address
                    </label>
                </div>
                <div className="w-96">
                    <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4" for="inline-full-name">
                        Phone 
                    </label>
                </div>
                <div className="w-96">
                    <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " type="text" />
                </div>
            </div>

            <div className="md:flex  md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 justify-end flex px-44">
                    <button className={`${classes} shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`} type="button">
                        {txt} Employee
                    </button>
                </div>
            </div>
        </form>
    )
}