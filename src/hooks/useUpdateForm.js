import { useState } from 'react';
import { addEmployee } from '../services/skillsetService';
import * as Constants from '../common/constants';
import Employee from '../models/employee';

function useUpdateForm(initValue = {}) {
    const [formData, setFormData] = useState(initValue);
    const [loading, setLoading] = useState(false);

    const updateFormDataValue = (data, name, value) => {
        return new Employee({ ...data, [name]: value });
    }

    const changeField = (e) => {
        let { name, value } = e.target;
        setFormData(currData => {
            return updateFormDataValue({ ...currData }, name, value);
        });
    }

    const changeSelectField = (name, value, operation) => {
        let currentValue = formData[name];
        if (!currentValue.includes(value)) {
            if (currentValue && operation === Constants.SELECT_ADD) {
                currentValue += `, ${value}`;
            }
            else {
                currentValue = value;
            }
        }
        else if (operation === Constants.SELECT_DELETE) {
            if (currentValue === value) {
                currentValue = '';
            }
            else if (currentValue.startsWith(value)) {
                currentValue = currentValue.replace(`${value}, `, '');
            }
            else {
                currentValue = currentValue.replace(`, ${value}`, '');
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
        setLoading(true);
        e.preventDefault();
        await addEmployee(formData);
        resetForm(new Employee());
        setLoading(false);
    };

    return { formData, loading, changeField, changeSelectField, resetForm, handleSubmit };

}

export default useUpdateForm;