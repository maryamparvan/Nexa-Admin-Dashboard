import './Dashboard.css';
import StatCard from './StatCard/StatCard';
import { FaCartShopping } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { LuPackageOpen } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import SalesChart from './SalesChart/SalesChart';
import Service from '../../../Service/Service';
import { useEffect, useState } from 'react';
import type { Property } from '../Product/PropertyList/PropertyList';
import TypeProduct from './PropertyTypes/PropertyTypes';
import RecentProperties from './RecentProperties/RecentProperties';

const Dashboard = (() =>{
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Service().then((data) => {
            setProperties(data);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    
    const forSale = properties.filter(
        property => property.transaction === "sale"
    ).length;

    const forRent = properties.filter(
        property => property.transaction === "rent"
    ).length;

    const averagePrice = properties.length > 0 ? properties.reduce(
                (total, property) => total + property.price_usd, 0) / properties.length : 0;

    return(
        <div className="divDashboard">
            <h3>Good morning, Maryam</h3>
            <p>Here's what's happening with your business today.</p>
            <div className='divClass '>
                <div className="CardClass"><StatCard title="Total Listings" value={properties.length.toString()} description="Properties available" svg={<LuPackageOpen />} /></div>
                <div className="CardClass"><StatCard title="Average Price" value={`$${Math.round(averagePrice).toLocaleString()}`} description="Average property price" svg={<TbMoneybag />}/></div>
                <div className="CardClass"><StatCard title="For Sale" value={forSale.toString()} description="Properties for sale" svg={<FaCartShopping />}/></div>
                <div className="CardClassn"><StatCard title="For Rent" value={forRent.toString()} description="Properties for rent" svg={<BsPeopleFill />}/></div>
            </div>
            <div className='bodypage'>
                <div className='bodyCard'>
                    <SalesChart properties={properties}/>
                </div>
                <div className='bodyCard'>
                    <TypeProduct properties={properties} />
                </div>
            </div>
            <div className='endBody'>
                <RecentProperties properties={properties} />
            </div>
        </div>
    )
})

export default Dashboard;