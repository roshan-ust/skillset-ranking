import { useState, useEffect, useCallback } from 'react';
import { addEmployee } from '../services/skillsetService';
import Employee from '../models/employee';

function useUpdateForm(initValue = {}) {
    const [formData, setFormData] = useState(initValue);

    useEffect(() => {
        console.log(formData);
    });

    const changeField = (e) => {
        let formObject = { ...formData };
        console.log({ ...formObject, [e.target.name]: e.target.value });
        setFormData({ ...formObject, [e.target.name]: e.target.value });
    }

    const resetForm = (initialValue) => {
        let formObject = { ...formData };
        setFormData({ ...formObject, ...initialValue });
    }

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        await addEmployee(formData);
        resetForm(new Employee());
    }, []);

    return { formData, changeField, resetForm, handleSubmit };

}

export default useUpdateForm;