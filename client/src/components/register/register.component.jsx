import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './register.css';

const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(defaultFormFields);
    const [error, setError] = useState('');
    const { firstName, lastName, email, password, confirmPassword } = formData;

    const submitForm = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else if (password.length < 6) {
            setError('Password must have 6 characters');
        } else {
            navigate('/');
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="d-flex flex-row justify-content-around m-5">
            <div>
                <p className='bold'>Signup</p>
                <p>We do not share your personal details with anyone</p>
            </div>
            <div className="d-flex flex-column w-25">
                <p className='bold error'>{error}</p>
                <form onSubmit={submitForm}>
                    <input type="text" className="input-fields" required placeholder='First Name' value={firstName} name='firstName' onChange={handleChange} />
                    <input type="text" className="input-fields" required placeholder='Last Name' value={lastName} name='lastName' onChange={handleChange} />
                    <input type="email" className="input-fields" required placeholder='Email' value={email} name='email' onChange={handleChange} />
                    <input type="password" className="input-fields" required placeholder='Password' value={password} name='password' onChange={handleChange} />
                    <input type="password" className="input-fields" required placeholder='Confirm Password' value={confirmPassword} name='confirmPassword' onChange={handleChange} />
                    <div>
                        <Button className='w-100' type='submit'>Signup</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;