import Button from 'react-bootstrap/Button';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const defaultFormFields = {
    email: '',
    password: ''
}

function SignIn() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(defaultFormFields);
    const { email, password } = formData;

    const submitForm = (event) => {
        event.preventDefault();
        navigate('/')
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="d-flex flex-row justify-content-around m-5">
            <div>
                <p className='bold'>Login</p>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <form className="d-flex flex-column w-25" onSubmit={submitForm}>
                <input type="email" value={email} className="input-fields" placeholder='Email' required name='email' onChange={handleChange} />
                <input type="password" value={password} className="input-fields" placeholder='Password' required name='password' onChange={handleChange} />
                <div>
                    <Button className='w-100' type='submit'>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;