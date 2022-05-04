import Button from 'react-bootstrap/Button';
import './signin.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();

    return (
        <div className="d-flex flex-row justify-content-around m-5">
            <div>
                <p className='bold'>Login</p>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <form className="d-flex flex-column w-25">
                    <input type="email" className="input-fields" required placeholder='Email' />
                    <input type="password" className="input-fields" required placeholder='Password' />
                <div>
                    <Button className='w-100' onClick={() => navigate('/')}>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;