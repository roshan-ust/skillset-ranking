import useUpdateForm from '../hooks/useUpdateForm';
import InputField from './form/input-field';
import Employee from '../models/employee';
import './form/form.css';

const addForm = {
    height: '100%',
    width: '75%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '10px'
}

export default function AddEmployee() {

    const { formData, changeField, handleSubmit } = useUpdateForm(new Employee());

    return (
        <>
            <form style={addForm} onSubmit={handleSubmit}>
                <InputField label='Name' name='name' value={formData.name} handleChange={changeField}></InputField>
                <InputField label='UID' name='uid' value={formData.uid} handleChange={changeField}></InputField>
                <InputField label='Email' name='email' value={formData.email} handleChange={changeField}></InputField>
                <InputField label='Current Account' name='account' value={formData.account} handleChange={changeField}></InputField>
                <InputField label='Reporting Manger' name='reportingManager' value={formData.reportingManager} handleChange={changeField}></InputField>
                <InputField label='Skillsets' name='skillsets' value={formData.skillsets} handleChange={changeField}></InputField>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}