import { useState } from 'react';
import { addEmployee } from '../services/skillsetService';
import Employee from '../models/employee';

function useUpdateForm(initValue = {}) {
    const [formData, setFormData] = useState(initValue);

    const changeField = (e) => {
        setFormData(currData => {
            currData[e.target.name] = e.target.value;
            return new Employee(currData);
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

    return { formData, changeField, resetForm, handleSubmit };

}

export default useUpdateForm;