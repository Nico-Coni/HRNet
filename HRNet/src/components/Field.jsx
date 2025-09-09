import { FIELD_TYPES } from "../utils/fieldTypes";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Field({
    type,
    label,
    name,
    id,
    className,
    placeholder,
    required,
    disabled,
    onChange,
    value,
}) {
    let component;
    switch (type) {
        case FIELD_TYPES.INPUT_TEXT:
            component = (
                <input
                    type='text'
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    id={id}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                />
            );
            break;
        case FIELD_TYPES.INPUT_DATE:
            component = (
                <DatePicker
                    selected={value ? new Date(value) : null}
                    onChange={(date) => {
                        const event = {
                            target: {
                                name: name,
                                value: date.toISOString().split('T')[0] // Format date as YYYY-MM-DD
                            }
                        };
                        onChange(event);
                    }}
                    dateFormat="MM/dd/yyyy"
                    placeholderText={placeholder}
                    className="date-picker-input"
                    id={id}
                    name={name}
                    required={required}
                />
            );
            break;
        case FIELD_TYPES.ZIP_CODE:
            component = (
                <input
                    type='number'
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    id={id}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    min="0"
                />
            );
            break;
        default:
            component = (
                <input
                    type='text'
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    value={value}
                />
            );
    }

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            {component}
        </div>
    );
}

export default Field;