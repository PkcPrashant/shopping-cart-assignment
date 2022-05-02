import { Link, Outlet } from "react-router-dom";
import './navigation.css';

function Navigation() {
  return (
    <>
        <div className="w-100 p-3 mb-5 shadow d-flex">
            <div className="margin-right-200">
              LOGO
            </div>
            <div className="flex-grow-1">
              <Link className="link" to='/'>Home</Link>
              <Link className="link" to='/products'>Products</Link>
            </div>
            <div>
              CART
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
