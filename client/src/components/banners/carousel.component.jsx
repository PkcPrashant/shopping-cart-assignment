import { useState } from "react";
import BootstrapCarousel from 'react-bootstrap/Carousel'

function Carousel({banners}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="mb-2 shadow">
        <BootstrapCarousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            {banners.map((banner, index) => {
                return (
                    // Order is pending {banner.order}
                    banner.isActive &&
                    <BootstrapCarousel.Item key={`${banner.id}${index}`}>
                        <img
                            className="d-block w-100"
                            src={banner.bannerImageUrl}
                            alt={banner.bannerImageAlt}
                        />
                    </BootstrapCarousel.Item>
                );
            })}
        </BootstrapCarousel>
        </div>
    );
};

export default Carousel;
