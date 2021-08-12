import React, { useState } from 'react'
import UpdateForm from '../../overlay/overlay.component'


export const Employee = () => {

    const [showModel, setShowModel] = useState(false)

    const onShowModel=()=>{
        setShowModel(prev => !prev)
    }

    const col = 'border-blue-600 '
    return (
        <>
            <div className="py-4 px-36 w-screen font-Poppins">
                <div className=" bg-white shadow rounded p-6">
                    <div className="flex justify-end items-center">
                        <button type="button" onClick={onShowModel} className="bg-green-600 hover:bg-green-700 mr-1 focus:outline-none focus:ring-2  text-white font-bold py-2 px-4 rounded ">Update</button>
                        <button className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2  text-white font-bold py-2 px-4 rounded ">Delete</button>
                    </div>
                    <div className="mt-6 flex">
                        <div className="w-10 flex flex-col items-center">
                            <img className="h-10 rounded-full" alt="profile pic" src="https://cdn.tuk.dev/assets/components/misc/activity-1.png" />
                            <div className={`py-4 border-l-2 h-32 ${col}`}>

                            </div>
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-semibold leading-normal text-gray-800">Bret</p>
                            <p className="text-xs leading-3 text-gray-500 pt-1">Leanne Graham</p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Email :  <span className="text-indigo-700">Sincere@april.biz</span><br />
                            </p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Company :  <span className="text-indigo-700">Romaguera-Crona</span><br />
                            </p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Phone :  <span className="text-indigo-700">1-770-736-8031 x56442</span><br />
                            </p>
                            <p className="pt-4 text-sm leading-4 text-gray-600">
                                Address :  <span className="text-indigo-700">Kulas Light</span><br />
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <UpdateForm  showModel={showModel} setShowModel={setShowModel} />

        </>
    )
}
