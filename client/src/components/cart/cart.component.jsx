import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

import './cart.css';

function Cart() {
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    let totalPrice = 0;

    return (
        cart.isLoading ?
            <div>Loading</div> :
            cart.error ?
                <div>{cart.error.message}</div> :
                !cart.data.length ?
                    <div>No data available at the moment</div> :
                    <div className='d-flex flex-column w-50 cartcontainer'>
                        <div className='d-flex flex-column flex-grow-1'>
                            {cart.data.map((cartData, index) => {
                                const product = products.data.find((product) => product.id === cartData.id);
                                const price = cartData.quantity * product.price;
                                totalPrice += price;
                                return (
                                    <div key={`${cartData.id}${index}`} className='d-flex flex-row mb-2 shadow'>
                                        <img src={product.imageURL} alt={product.name} className="w-20" height="100px" />
                                        <div className="d-flex flex-column w-100">
                                            <p className="bold">{product.name}</p>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex flex-row flex-grow-1 justify-content-evenly'>
                                                    <button className='counterbtn d-flex'><Icon icon="akar-icons:minus" /></button>
                                                    <p>{cartData.quantity}</p>
                                                    <button className='counterbtn d-flex'><Icon icon="akar-icons:plus" /></button>
                                                    <span>x</span>
                                                    <p>Rs.{product.price}</p>
                                                </div>
                                                <div className='w-50 text-right pe-5'>
                                                    <p>Rs.{price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className='d-flex flex-row justify-content-between p-3 m-3 checkoutbtn'>
                            <span>Proceed to checkout</span>
                            <span>{totalPrice}</span>
                        </button>
                    </div>
    );
}

export default Cart;