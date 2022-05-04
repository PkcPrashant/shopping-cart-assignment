import { useEffect } from "react";
import Carousel from "./carousel.component";
import { getBanners } from '../../redux/action/banners';
import { useDispatch, useSelector } from "react-redux";

function Banners() {

    const dispatch = useDispatch();
    const banners = useSelector(state => state.banners);

    useEffect(() => {
        dispatch(getBanners());
    }, [dispatch]);
    
    return (
        banners.isLoading ?
            <div>Loading</div> :
            banners.error ?
                <div>{banners.error.message}</div> :
                <Carousel banners={banners.data} />
    );
  }
  
export default Banners;
  