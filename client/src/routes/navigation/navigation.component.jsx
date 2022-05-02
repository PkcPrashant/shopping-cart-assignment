import { Link, Outlet } from "react-router-dom";
import './navigation.css';

function Navigation() {
  return (
    <>
        <div className="w-100 p-1 mb-5 shadow d-flex">
            <div>
              <img src="/static/images/logo_2x.png" className="w-50" alt="Sabka Bazaar" />
            </div>
            <div className="flex-grow-1 align-self-center">
              <Link className="link margin-right-50" to='/'>Home</Link>
              <Link className="link" to='/products'>Products</Link>
            </div>
            <div className="d-flex w-12 flex-column justify-content-between">
              <div className="d-flex justify-content-end">
                <Link className="link me-3" to='/signin'>SignIn</Link>
                <Link className="link" to='/register'>Register</Link>
              </div>
              <div className="d-flex align-items-center justify-content-center cart">
                <img src="/static/images/cart.svg" className="w-30" alt="Cart Items" />
                <span>0 Items</span>
              </div>
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
