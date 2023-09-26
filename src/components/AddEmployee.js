import useUpdateForm from '../hooks/useUpdateForm';
import InputField from './form/input-field';

export default function AddEmployee() {
    const [formData, changeField] = useUpdateForm({ name: '' });

    return (
        <form>
            <InputField label='Name' name='name' value={formData.name} handleChange={changeField}></InputField>
        </form>
    )
}