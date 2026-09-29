import Service from "../../../../Service/Service";
import { useEffect, useState } from "react";
import './PropertyList.css';
import { FaBath } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa";
import { HiMiniMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";

export interface Property {
    id: string;
    title: string;
    price_usd: number;
    images: string[];
    bathrooms: number;
    bedrooms: number;
    sqm: number;
    address: string;
    transaction:string;
    forsale:number;
    length: number;
    property_subtype:string;
    country: string;
    original_price: number;

}
type prop ={
    valuetype: string;
    valueStatue: string;
    search :string;
}
const PropertyList = (({valuetype,valueStatue,search}:prop) =>{
    const [properties, setProperties] = useState<Property[]>([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProperties = async () => {
            const data = await Service();
            setProperties(data);
            setLoading(false);
        };
        fetchProperties();
    }, []);
    console.log(properties);
    const newproperties = properties.filter((property) => {
        const typeMatch = valuetype === "all" || property.property_subtype === valuetype;
        const statusMatch = valueStatue==="all" || property.transaction === valueStatue;
        const searchMatch =  property.title.toLowerCase().includes(search.toLowerCase());
        return typeMatch && statusMatch && searchMatch;
    });
    if(Loading){return(<div><h3>loading...</h3></div>)}
    return(
        <div className="propertyGrid">
            {newproperties.map((property) => (
                <div className="divCartProduct" key={property.id}>
                    <Link to={`/Products/${property.id}`} className="divCartProduct" key={property.id}>
                        <img src={`https://api.untera.io${property.images[0]}`} alt={property.title} className="imageclass"/>
                        <h3>{property.title}</h3>
                        <h4>${property.price_usd}</h4>
                        <div className="addressHouse">
                            <HiMiniMapPin />
                            <p>{property.address}</p>
                        </div>
                        <div className="idhomefotter">
                            <div className="idhome">
                                <MdBedroomChild/>
                                <p>{property.bedrooms}</p>
                            </div>
                            <div className="idhome">
                                <FaBath/>
                                <p>{property.bathrooms}</p>
                            </div>
                            <div className="idhome">
                                <FaRulerCombined/>
                                <p>{property.sqm}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
})

export default PropertyList;