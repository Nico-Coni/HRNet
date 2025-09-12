import React from 'react'
import Field from '../components/Field'
import { FIELD_TYPES } from '../utils/fieldTypes'
import { states, departments } from '../data/data.js'
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { CustomModal } from '../components/Modal.jsx'
import { employees } from '../data/data.js'
import { useLocalStorageState } from '../hooks/hooks.js'
import { Dropdown } from 'plugin_dropdown_react'

export function Form() {

    const initialFormData = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
        abbreviation: ''
    }
    const [isCreatedModalOpen, setIsCreatedModalOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData)
    const [employeesList, setEmployeesList] = useLocalStorageState('employees', employees);
    const listStates = states.map(state => state.name)

    const handleChangeForm = (event) => {
        let abb = formData.abbreviation
        if (event.target.name === 'state') {
            abb = states.find(state => state.name === event.target.value).abbreviation
        }
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            abbreviation: abb
        })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const updatedEmployees = [...employeesList, formData];
        setEmployeesList(updatedEmployees);
        setIsCreatedModalOpen(true);
        setFormData(initialFormData);
    }

    return (
        <div className="form-container">

            <h2>Create Employee</h2>
            <form action="#" className="form" id="create-employee" onSubmit={handleSubmitForm}>
                <Field
                    type={FIELD_TYPES.INPUT_TEXT}
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required={true}
                    value={formData.firstName}
                    onChange={handleChangeForm}
                    className="input"
                />
                <Field
                    type={FIELD_TYPES.INPUT_TEXT}
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required={true}
                    value={formData.lastName}
                    onChange={handleChangeForm}
                    className="input"
                />
                <Field
                    type={FIELD_TYPES.INPUT_DATE}
                    label="Date of Birth"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    placeholder="01/01/2000"
                    required={true}
                    onChange={handleChangeForm}
                    value={formData.dateOfBirth}
                    className="input"
                />
                <Field
                    type={FIELD_TYPES.INPUT_DATE}
                    label="Start Date"
                    name="startDate"
                    id="startDate"
                    placeholder="01/01/2000"
                    required={true}
                    onChange={handleChangeForm}
                    value={formData.startDate}
                    className="input"
                />
                <fieldset className="address">
                    <legend>Address</legend>
                    <Field
                        type={FIELD_TYPES.INPUT_TEXT}
                        label="Street"
                        name="street"
                        id="street"
                        placeholder="Street"
                        required={true}
                        onChange={handleChangeForm}
                        value={formData.street}
                        className="input"
                    />
                    <Field
                        type={FIELD_TYPES.INPUT_TEXT}
                        label="City"
                        name="city"
                        id="city"
                        placeholder="City"
                        required={true}
                        onChange={handleChangeForm}
                        value={formData.city}
                        className="input"
                    />
                    <Dropdown
                        type={FIELD_TYPES.SELECT}
                        label="State"
                        name="state"
                        id="state"
                        placeholder="Select a state"
                        required={true}
                        onChange={handleChangeForm}
                        options={listStates}
                        value={formData.state}
                        className="input"
                    />
                    <Field
                        type={FIELD_TYPES.ZIP_CODE}
                        label="Zip Code"
                        name="zipCode"
                        id="zipCode"
                        placeholder="Zip Code"
                        required={true}
                        onChange={handleChangeForm}
                        value={formData.zipCode}
                        className="input"
                    />
                </fieldset>
                <Dropdown
                    label="Department"
                    name="department"
                    id="department"
                    placeholder="Select a department"
                    required={true}
                    options={departments}
                    onChange={handleChangeForm}
                    value={formData.department}
                    className="input"
                />
                <button type="submit" className="btn btn-submit" alt="Validation du formulaire">Save</button>
            </form>
            <CustomModal
                isOpen={isCreatedModalOpen}
                onRequestClose={() => setIsCreatedModalOpen(false)}
                contentLabel="Employee Created !"
            >
            </CustomModal>
        </div>
    )
}