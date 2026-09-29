import OrderService from "../../../Service/OrderService/OrderService";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./Order.css";
import OrderStats from "./OrderStats/OrderStats";

type Order = {
    id: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
    discountedTotal: number;
};

const Order = (() =>{
    const [orderv, setorderv] = useState<Order[]>([]);
    const [Loading, setLoading] = useState(true);
    const [priceFilter, setPriceFilter] = useState("all");
    const [searchu, setsearchu] = useState("");
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
        const searchMatch = order.id.toString().includes(searchu);
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

        return searchMatch && priceMatch;
    });
    console.log(orderv)
    if (Loading) { return <h3>Loading...</h3>; }

    const total = filterData.reduce((sum, order) => {
        return sum + order.discountedTotal;
    }, 0);
    const avg = filterData.length > 0 ? total / filterData.length : 0;
    

    return(
        <div>
            <div>
            <OrderStats  totalId={filterData.length} Revenue={total.toFixed(2)} AvgOrder={avg.toFixed(2)} Pending={0} />
            <br />
            <div className="headUser">
                <div className="searchUser">
                    <input type="search" placeholder="search order ID" onChange={(e) => setsearchu(e.target.value)} value={searchu}/>
                    <IoMdSearch />
                </div>
                <select className="selectUser" onChange={(e) => setPriceFilter(e.target.value)} value={priceFilter}>
                    <option value="all">All Orders</option>
                    <option value="Under100">Under $100</option>
                    <option value="$100-$500">$100 - $500</option>
                    <option value="$500-$1000">$500 - $1000</option>
                    <option value="over$1000">Over $1000</option>
                </select>
            </div>
            <div className="tableContainer">
                <table className="tableUser">
                    <thead>
                        <th>Order ID </th>
                        <th>Customer </th>
                        <th>Products </th>
                        <th>Quantity </th>
                        <th>Total </th>
                    </thead>
                    <tbody className="tbodyClass">
                    {filterData.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>#{order.id}</td>
                                <td>User #{order.userId}</td>
                                <td>{order.totalProducts}</td>
                                <td>{order.totalQuantity}</td>
                                <td>${order.discountedTotal}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
})

export default Order;