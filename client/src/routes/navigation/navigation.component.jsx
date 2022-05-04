import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import './navigation.css';

function Navigation() {

  const [quantity, setQuantity] = useState(0);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const productsQuantity = cart.data.map((cartData) => cartData.quantity).reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0
    );
    setQuantity(productsQuantity);
  }, [cart]);

  return (
    <>
        <div className="w-100 p-1 shadow d-flex">
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
              <Link to='/cart' className="d-flex align-items-center justify-content-center cart link">
                <img src="/static/images/cart.svg" className="w-30" alt="Cart Items" />
                <span>{quantity} Items</span>
              </Link>                
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
