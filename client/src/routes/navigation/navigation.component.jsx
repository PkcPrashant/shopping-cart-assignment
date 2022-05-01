import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
        <div>
            I am navigation bar
        </div>
        <Outlet />
    </div>
  );
}

export default Navigation;
