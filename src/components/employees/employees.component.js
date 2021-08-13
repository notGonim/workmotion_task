import React from 'react'
import { Employee } from './employee/employee.component'

export const Employees = ({ employees }) => {
    return (
        <>
            {
                employees.map(employee =>
                    <Employee key={employee.id} id={employee.id} name={employee.name} username={employee.username} email={employee.email} address={employee.address.street}
                        phone={employee.phone} website={employee.website} company={employee.company.name} />
                )
            }
        </>
    )
}
