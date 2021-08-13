import React, { useEffect } from 'react'
import { Form } from '../components/form/form.component'

export default function ADDPAGE() {


    useEffect(() => {
        document.title = 'ADD - WorkMotion'
    }, [])

    return (
        <>
            <Form txt='ADD' classes='bg-blue-600 hover:bg-blue-500'  />
        </>
    )
}
