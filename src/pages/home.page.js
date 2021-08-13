import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Employee } from '../components/employees/employee/employee.component'
import { Employees } from '../components/employees/employees.component'
import Spinner from '../components/spinner/spinner.component'
import { getEmployees } from '../store/employees/employees-actions'

export default function HOMEPAGE() {

    const { employees, error, loading } = useSelector((state) => state.employees)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch])

    return (
        <>
            {loading ? <Spinner /> : <Employees employees={employees} />}
        </>
    )
}
