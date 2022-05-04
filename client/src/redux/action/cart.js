import ApiService from '../../services/api';
import { cartAction } from '../slice/cart';

export const addToCart = (product) => {
    return async (dispatch) => {
        try {
            dispatch(cartAction.setLoading());
            const response = await ApiService.postApi('/addToCart');
            if(response.data.response === 'Success') {
                dispatch(cartAction.addToCart(product));
            }
        } catch (error) {
            dispatch(cartAction.setError(error));
        }
    }
}

// const showtoaster = (msg, type = "success") => {//     toast(msg, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         type
//     })
// }