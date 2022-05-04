import { productsAction } from "../slice/products";
import ApiService from '../../services/api';

export const getProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(productsAction.setLoading());
            let products = await ApiService.getApi('/products');
            dispatch(productsAction.setProduct(products.data));
        } catch (error) {
            dispatch(productsAction.setError(error));
        }
        
    }
}