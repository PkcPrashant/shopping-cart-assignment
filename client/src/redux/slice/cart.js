import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setLoading(state) {
            state.isLoading = true;
            state.error = null;
        },
        addToCart(state, action) {
            state.isLoading = false;
            state.error = null;

            let cart = [...state.data.slice()];
            const matchedIndex = cart.findIndex((data) => data.id === action.payload.id);
            if (matchedIndex > -1) {
                cart[matchedIndex].quantity = cart[matchedIndex].quantity + 1;
            } else {
                cart.push({ id: action.payload.id, quantity: 1 });
            }
            state.data = cart;
        },
        setError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const cartAction = cartReducer.actions;
export default cartReducer;