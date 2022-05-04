import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const categoriesReducer = createSlice({
    name: 'category',
    initialState,
    reducers:{
        setLoading(state) {
            state.isLoading = true;
            state.data = [];
            state.error = null;
        },
        setCategories(state, action) {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
            state.data = [];
        }
    }
})

export const categoriesAction = categoriesReducer.actions;
export default categoriesReducer;