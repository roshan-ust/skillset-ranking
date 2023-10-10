import { useState } from 'react';
import { addEmployee } from '../services/skillsetService';
import Employee from '../models/employee';

function useUpdateForm(initValue = {}) {
    const [formData, setFormData] = useState(initValue);

    const updateFormDataValue = (data, name, value) => {
        return new Employee({ ...data, [name]: value });
    }

    const changeField = (e) => {
        let { name, value } = e.target;
        setFormData(currData => {
            return updateFormDataValue({ ...currData }, name, value);
        });
    }

    const changeSelectField = (e) => {
        let { name, value } = e.target;
        let currentValue = formData[name];
        if (!currentValue.includes(value)) {
            if (currentValue) {
                currentValue += `, ${value}`;
            }
            else {
                currentValue = value;
            }
        }

        setFormData(currData => {
            return updateFormDataValue({ ...currData }, name, currentValue);
        });
    }

    const resetForm = () => {
        setFormData(new Employee());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEmployee(formData);
        resetForm(new Employee());
    };

    return { formData, changeField, changeSelectField, resetForm, handleSubmit };

}

export default useUpdateForm;