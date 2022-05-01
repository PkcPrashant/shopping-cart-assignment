import { useEffect, useState } from "react";

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
        banners.map((banner) => {
            return (
                banner.isActive && <div key={banner.id}>
                    {/* <div>Order: {banner.order}</div> How to use order? */}
                    <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                </div>
            );
        })
    );
  }
  
export default Banners;
  