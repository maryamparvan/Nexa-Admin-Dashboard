import type { Property } from '../../Product/PropertyList/PropertyList';
import './RecentProperties.css';

interface RecentPropertiesProps {
    properties: Property[];
}
const RecentProperties = (({properties }:RecentPropertiesProps) =>{
    const recentProperties = properties.slice(0, 5);
    return(
        <div className='RecentPropertiesDiv'>
            <h2>Recent Properties</h2>
            <div className="tableWrapper">
                <table className='table'>
                    <thead className='headTable'>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {recentProperties.map((property) => (
                        <tr key={property.id}>
                            <td className="propertyName">
                                {property.title}
                            </td>
                            <td>
                                {property.property_subtype}
                            </td>
                            <td>
                                ${property.price_usd.toLocaleString()}
                            </td>
                            <td>
                                <span className={ property.transaction === "sale" ? "status sale" : "status rent" }>
                                    {property.transaction === "sale" ? "For Sale" : "For Rent"}
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
})

export default RecentProperties;