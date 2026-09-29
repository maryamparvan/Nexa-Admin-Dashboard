import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaHouse } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import './PropertyTypes.css';
import type { Property } from '../../Product/PropertyList/PropertyList';

interface PropertyTypesProps {
    properties: Property[];
}

const PropertyTypes = (({properties}:PropertyTypesProps) =>{
    const ApartemanNum = properties.filter((property) => {
        return property.property_subtype === "apartment";
    });
    const houseNum = properties.filter((property) => {
        return property.property_subtype === "house";
    });
    const VillaNum = properties.filter((property) => {
        return property.property_subtype === "Villa";
    });
    const saleNum = properties.filter((property) => {
        return property.transaction === "sale";
    });
    const rentNum = properties.filter((property) => {
        return property.transaction === "rent";
    });
    return(
        <div className="divTypeProduct">
            <h3>Property Overview </h3>
            <h4> Distribution by property type </h4>
            <div className="numhouse">
                <PiBuildingApartmentFill />
                <span>Aparteman : {ApartemanNum.length} </span>
            </div>
            <hr/>
            <div className="numhouse">
                <FaHouse />
                <span>House : {houseNum.length}</span>
            </div>
            <hr/>
            <div className="numhouse">
                <MdVilla />
                <span>Villa : {VillaNum.length}</span>
            </div>
            <hr/>
            <div>
                <h4>Total Properties : {properties.length} </h4>
                <h4>For Sale : {saleNum.length} </h4>
                <h4>For Rent : {rentNum.length} </h4>

            </div>
        </div>
    )
})

export default PropertyTypes;