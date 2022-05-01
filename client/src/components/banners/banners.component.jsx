import { useEffect, useState } from "react";
import Carousel from "./carousel.component";

function Banners() {

    const [banners, setBanners] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:5000/banners')
        .then((response) => response.json())
        .then((response) => setBanners(response))
        .catch((error) => console.log('Error ', error))
    }, []);
    
    return (
        !banners.length ?
        <div> No banners Available</div> :
        <Carousel banners={banners} />
    );
  }
  
export default Banners;
  