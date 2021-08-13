import React, { useState } from 'react'
import UpdateForm from '../../overlay/overlay.component'


export const Employee = ({ key, id, name, username, email, address, phone, website, company }) => {

    const [showModel, setShowModel] = useState(false)

    const onShowModel = () => {
        setShowModel(prev => !prev)
    }

    const col = 'border-blue-600 '
    return (
        <>
            <div className="py-4 px-36 w-screen font-Poppins">
                <div className=" bg-white shadow rounded p-6">
                    <div className="flex justify-end items-center">
                        <button type="button" onClick={onShowModel} className="bg-transparent hover:bg-green-500 mr-2 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                        >Update</button>
                        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        >Delete</button>
                    </div>
                    <div className="mt-6 flex">
                        <div className="w-10 flex flex-col items-center">
                            <img className="h-10 rounded-full" alt="profile pic" src="https://cdn.tuk.dev/assets/components/misc/activity-1.png" />
                            <div className={`py-4 border-l-2 h-32 ${col}`}>

                            </div>
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-semibold leading-normal text-gray-800">{username}</p>
                            <p className="text-xs leading-3 text-gray-500 pt-1">{name}</p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Email :  <span className="text-indigo-700">{email}</span><br />
                            </p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Company :  <span className="text-indigo-700">{company}</span><br />
                            </p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Phone :  <span className="text-indigo-700">{phone}</span><br />
                            </p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Address :  <span className="text-indigo-700">{address}</span><br />
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <UpdateForm showModel={showModel} setShowModel={setShowModel} />

        </>
    )
}
