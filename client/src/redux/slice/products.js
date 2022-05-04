import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const productsReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoading(state) {
            state.isLoading = true;
            state.data = [];
            state.error = null;
        },
        setProduct(state, action) {
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
            state.data = [];
        }
    }
})

export const productsAction = productsReducer.actions;
export default productsReducer;