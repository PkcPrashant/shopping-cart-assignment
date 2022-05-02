import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
        <div>
            LOGO
            <div>
              <Link to='/'>Home</Link>
              <Link to='/products'>Products</Link>
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
