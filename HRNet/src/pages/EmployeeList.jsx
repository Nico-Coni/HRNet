import React from 'react';
import { useLocalStorageState } from '../hooks/hooks';
import '../index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';
import 'primereact/resources/themes/soho-dark/theme.css'

export function EmployeeList() {

    const [employeesList] = useLocalStorageState('employees', []);

    return (
        <div className="employee-list-container">
            <h1>Current Employees</h1>

            <DataTable
                value={employeesList}
                paginator
                rows={10}
                className="p-datatable-customers"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="firstName" header="First Name" sortable></Column>
                <Column field="lastName" header="Last Name" sortable></Column>
                <Column field="dateOfBirth" header="Date of Birth" sortable></Column>
                <Column field="startDate" header="Start Date" sortable></Column>
                <Column field="street" header="Street" sortable></Column>
                <Column field="city" header="City" sortable></Column>
                <Column field="abbreviation" header="State" sortable></Column>
                <Column field="zipCode" header="Zip Code" sortable></Column>
                <Column field="department" header="Department" sortable></Column>
            </DataTable>

            <NavLink to="/" className="home-link btn">Home</NavLink>
        </div>
    );
}