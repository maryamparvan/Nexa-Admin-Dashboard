import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import './SalesChart.css';
import type { Property } from '../../Product/PropertyList/PropertyList';

interface SalesChartProps {
    properties: Property[];
}

const SalesChart = ({ properties }: SalesChartProps) => {
    const priceData = properties.map((property) => ({
        property: property.title,
        price: property.price_usd
    }));

    const averagePrice = properties.length > 0 ? properties.reduce(
                (total, property) => total + property.price_usd, 0 ) / properties.length: 0;

    return (
        <div className="salesChart">
            <div className="chartHeader">
                <div>
                    <div className="chartHeaderdiv">
                        <h3>Property Price Overview</h3>
                    </div>
                    <h2>
                        ${Math.round(averagePrice).toLocaleString()}
                    </h2>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceData} margin={{ left: 40, right: 10, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="property" interval={0} tick={{ fontSize:5 }} angle={-20} textAnchor="end"  height={90}/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#0f172a" strokeWidth={2}  />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;