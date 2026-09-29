import { HiMiniMapPin } from "react-icons/hi2";
import { FaBath } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";
import { useEffect, useState } from "react";
import Service from "../../../../Service/Service";
import type { Property } from "../PropertyList/PropertyList";
import { useParams } from "react-router-dom";
import { MdBedroomChild } from "react-icons/md";
import Button from "../../../Button/Button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './PropertyDetails.css'
import { FaGlobe } from "react-icons/fa6";

const PropertyDetails = (() =>{
    const { id } = useParams();

    useEffect(() => {
        const fetchProperty = async () => {
            const data = await Service();
            const foundProperty = data.find(
                (property: Property) => property.id === id
            );
            setProperty(foundProperty || null);
            setLoading(false);
        };
        fetchProperty();
    }, [id]);

    
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);

    if (loading) {
        return <div>Loading...</div>;
    }


    if (!property) {
        return <div>Property not found</div>;
    }
    const nextImage = () => {
    setCurrentImage((current) =>  current === property.images.length - 1 ? 0: current + 1 );
    };
    const previousImage = () => {
        setCurrentImage((current) =>current === 0 ? property.images.length - 1 : current - 1);

    };

    return(
        <div className="divPropertyDetails">
            <div className="divimg">
                <img src={`https://api.untera.io${property.images[currentImage]}`} alt={property.title} className="imageclassdetail"/>
                {property.images.length > 1 && (
                    <div className="rightLeft">
                        <Button className="galleryButton" fun={previousImage}>
                            <FaChevronLeft />
                        </Button>
                        <Button className="galleryButton" fun={nextImage}>
                            <FaChevronRight />
                        </Button>
                    </div>
                )}
            </div>
            <div className="divBody">
                <span className="propertyStatus">
                    {property.transaction === "sale" ? "For Sale" : "For Rent"}
                </span>
                <h1>{property.title}</h1>
                <div className="addressHouse">
                    <HiMiniMapPin />
                    <p>{property.address}</p>
                </div>
                <div className="priceSection">
                    <h2>${property.price_usd.toLocaleString()}</h2>
                    <p>
                        Original price:  {property.original_price.toLocaleString()}
                    </p>
                </div>
                <div className="propertyFeatures">

                    <div className="feature">
                        <MdBedroomChild />
                        <div>
                            <strong>{property.bedrooms}</strong>
                            <span>Bedrooms</span>
                        </div>
                    </div>
                    <div className="feature">
                        <FaBath />
                        <div>
                            <strong>{property.bathrooms}</strong>
                            <span>Bathrooms</span>
                        </div>
                    </div>
                    <div className="feature">
                        <FaRulerCombined />
                        <div>
                            <strong>{property.sqm} m²</strong>
                            <span>Area</span>
                        </div>
                    </div>

                </div>
                <div className="countryInfo">
                    <FaGlobe />
                    <span>{property.country}</span>
                </div>

            </div>
        </div>
    )
})

export default PropertyDetails;