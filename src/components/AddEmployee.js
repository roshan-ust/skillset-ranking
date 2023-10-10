import React, { useEffect, useState } from 'react';
import useUpdateForm from '../hooks/useUpdateForm';
import InputField from './form/input-field';
import SelectField from './form/select-field';
import Employee from '../models/employee';
import { getAllSkills } from '../services/skillsetService';
import './form/form.css';

const addForm = {
    height: '100%',
    width: '60%',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '10px'
}

const AddEmployee = () => {
    const { formData, changeField, changeSelectField, handleSubmit } = useUpdateForm(new Employee());
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getAllSkills().then(async (res) => {
            const response = await res.json();
            setSkills([...response]);
        });
    }, []);

    return (
        <>
            <form style={addForm} onSubmit={handleSubmit}>
                <InputField label='Name' name='name' value={formData.name} handleChange={changeField}></InputField>
                <InputField label='UID' name='uid' value={formData.uid} handleChange={changeField}></InputField>
                <InputField label='Email' name='email' value={formData.email} handleChange={changeField}></InputField>
                <InputField label='Current Account' name='account' value={formData.account} handleChange={changeField}></InputField>
                <InputField label='Reporting Manger' name='reportingManager' value={formData.reportingManager} handleChange={changeField}></InputField>
                <InputField label='Skillsets' name='skillsets' value={formData.skillsets} handleChange={changeField}></InputField>
                <SelectField label='Skillsets' value={formData.skillsets} name='skillsets' skills={skills} handleChange={changeSelectField}></SelectField>
                <button type='submit' className='btn btn-lg btn-primary mt-3'>Submit</button>
            </form>
        </>
    )
}

export default AddEmployee;