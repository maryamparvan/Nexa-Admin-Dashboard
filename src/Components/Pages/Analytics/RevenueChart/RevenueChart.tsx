import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import "./RevenueChart.css"

type Order = {
  id: number;
  discountedTotal: number;
};
type Props = {
  orders: Order[];
};
  
const RevenueChart = ({ orders }: Props) => {
  const chartData = orders.map((order) => ({
    name: `Order ${order.id}`,
    revenue: order.discountedTotal,
  }));
  return (
    <div className="revenueChart">
      <div className="revenueChartHeader">
        <div>
          <h3>Revenue by Order</h3>
          <p>Discounted value of each order</p>
        </div>
      </div>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, "Revenue"]}/>
            <Bar dataKey="revenue" name="Revenue" radius={[6, 6, 0, 0]} fill="#4F46E5"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;