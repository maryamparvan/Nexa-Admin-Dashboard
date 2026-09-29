import { useEffect, useState } from "react";
import AnalyticsHeader from "./AnalyticsHeader/AnalyticsHeader";
import OrderService from "../../../Service/OrderService/OrderService";
import RevenueChart from "./RevenueChart/RevenueChart";
import NumChart from "./NumChart/NumChart";
import OrderValueChart from "./DiscountDistributionChart/DiscountDistributionChart";
import './Analytics.css';
import TableAnalytics from "./TableAnalytics/TableAnalytics";

const Analytics = (() =>{
    const [orderv, setorderv] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [priceFilter, setPriceFilter] = useState("all");
    useEffect (() =>{
        OrderService()
            .then((data) => {
                setorderv(data);
            })
            .finally(() => {
                setLoading(false);
            });
    },[])
    useEffect (() =>{
        OrderService()
            .then((data) => {
                setorderv(data);
            })
            .finally(() => {
                setLoading(false);
            });
    },[])
    const filterData = orderv.filter((order) => {
        const priceMatch = priceFilter === "all" || (priceFilter === "under100" &&
                order.discountedTotal < 100) ||
            (priceFilter === "$100-$500" &&
                order.discountedTotal >= 100 &&
                order.discountedTotal <= 500) ||
            (priceFilter === "$500-$1000" &&
                order.discountedTotal > 500 &&
                order.discountedTotal <= 1000) ||
            (priceFilter === "over$1000" &&
                order.discountedTotal > 1000);

        return priceMatch;
    });
    console.log(orderv);
    if (Loading) { return <h3>Loading...</h3> }

    const total = filterData.reduce((sum, order) => {
        return sum + order.discountedTotal;
    }, 0);
    const avg = filterData.length > 0 ? total / orderv.length : 0;
    
    return(
        <div className="analyticclass">
            <AnalyticsHeader Revenue={total.toFixed(2)} orders={filterData.length} avgOrder={avg.toFixed(2)} customers={filterData.length} priceFilter={priceFilter} setPriceFilter={setPriceFilter}  />
            <RevenueChart  orders={filterData}/>
            <div className="charts">
                <NumChart orders={filterData}/>
                <OrderValueChart orders={filterData} />
            </div>
            <TableAnalytics orders={filterData} />
        </div>
    )
})

export default Analytics;