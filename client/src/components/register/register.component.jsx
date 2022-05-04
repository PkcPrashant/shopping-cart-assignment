import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './register.css';


function Register() {

    const navigate = useNavigate();

    return (
        <div className="d-flex flex-row justify-content-around m-5">
            <div>
                <p className='bold'>Signup</p>
                <p>We do not share your personal details with anyone</p>
            </div>
            <form className="d-flex flex-column w-25">
                    <input type="text" className="input-fields" required placeholder='First Name' />
                    <input type="text" className="input-fields" required placeholder='Last Name' />
                    <input type="email" className="input-fields" required placeholder='Email' />
                    <input type="password" className="input-fields" required placeholder='Password' />
                    <input type="password" className="input-fields" required placeholder='Confirm Password' />
                <div>
                    <Button className='w-100' onClick={() => navigate('/')}>Signup</Button>
                </div>
            </form>
        </div>
    )
}

export default Register;