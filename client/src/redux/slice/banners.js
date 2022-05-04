import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    isLoading: false,
    error: null
}

const bannersReducer = createSlice({
    name: 'banner',
    initialState,
    reducers:{
        setBanners(state, action) {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setLoading(state) {
            state.isLoading = true;
            state.data = [];
            state.error = null;
        },
        setError(state, action) {
            state.isLoading = false;
            state.data = [];
            state.error = action.payload;
        }
    }
})

export const bannersAction = bannersReducer.actions;
export default bannersReducer;
