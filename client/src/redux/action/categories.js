import { categoriesAction } from "../slice/categories";
import ApiService from '../../services/api';

export const getCategories  = () => {
    return async (dispatch) => {
        try {
            dispatch(categoriesAction.setLoading());            
            let categories = await ApiService.getApi('/categories');
            let enabledCategories = categories.data.filter(category => category.enabled)
            dispatch(categoriesAction.setCategories(enabledCategories))
        } catch (error) {
            dispatch(categoriesAction.setError(error))
        }
    }
}