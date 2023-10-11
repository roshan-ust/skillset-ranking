import React, { useEffect, useState } from 'react';
import useUpdateForm from '../hooks/useUpdateForm';
import InputField from './form/input-field';
import SelectField from './form/select-field';
import Employee from '../models/employee';
import { getAllSkills } from '../services/skillsetService';
import './form/form.css';

const addForm = {
    width: '60%',
    margin: '50px auto auto auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '20px'
}

const AddEmployee = () => {
    const { formData, loading, changeField, changeSelectField, handleSubmit } = useUpdateForm(new Employee());
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getAllSkills().then(async (res) => {
            const response = await res.json();
            setSkills([...response]);
        });
    }, []);

    return (
        <>
            <form style={addForm} onSubmit={handleSubmit} className='border px-3 pt-5 pb-4 rounded bg-white'>
                <InputField label='Name' name='name' value={formData.name} handleChange={changeField}></InputField>
                <InputField label='UID' name='uid' value={formData.uid} handleChange={changeField}></InputField>
                <InputField label='Email' name='email' value={formData.email} handleChange={changeField}></InputField>
                <InputField label='Current Account' name='account' value={formData.account} handleChange={changeField}></InputField>
                <InputField label='Reporting Manger' name='reportingManager' value={formData.reportingManager} handleChange={changeField}></InputField>
                <SelectField label='Skillsets' value={formData.skillsets} name='skillsets' skills={skills} handleChange={changeSelectField}></SelectField>
                <button type='submit' className='btn btn-lg btn-primary' disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
            </form>
        </>
    )
}

export default AddEmployee;