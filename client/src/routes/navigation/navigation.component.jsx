import { Link, Outlet } from "react-router-dom";
import './navigation.css';

function Navigation() {
  return (
    <>
        <div className="w-100 p-1 mb-5 shadow d-flex">
            <div>
              <img src="/static/images/logo_2x.png" className="w-50" alt="Sabka Bazaar" />
            </div>
            <div className="flex-grow-1">
              <Link className="link" to='/'>Home</Link>
              <Link className="link" to='/products'>Products</Link>
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <img src="/static/images/cart.svg" className="w-10" alt="Cart Items" />
              0 Items
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
