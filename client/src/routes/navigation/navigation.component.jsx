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
              <Link className="link" to='/'>Home</Link>
              <Link className="link" to='/products'>Products</Link>
            </div>
            <div className="d-flex align-self-end align-items-center justify-content-center w-12 cart">
              <img src="/static/images/cart.svg" className="w-30" alt="Cart Items" />
              <span>0 Items</span>
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
