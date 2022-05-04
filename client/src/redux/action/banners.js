import { bannersAction } from "../slice/banners";
import ApiService from '../../services/api';

export const getBanners = () => {
    return async (dispatch) => {
        try {
            dispatch(bannersAction.setLoading());
            const response = await ApiService.getApi('/banners')
            dispatch(bannersAction.setBanners(response.data))
        } catch (error) {
            dispatch(bannersAction.setError(error))
        }
    }
}