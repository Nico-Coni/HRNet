import React from 'react'
import { Form } from '../containers/Form'
import { NavLink } from 'react-router-dom'

export function Index() {
    return (
        <main>
            <h1 className='title' alt="HRnet">HRnet</h1>
            <NavLink to="EmployeeList" className="home-link btn">View Current Employees</NavLink>
            <Form />
        </main>
    )
}