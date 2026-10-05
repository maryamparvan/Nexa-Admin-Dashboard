import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

type Order = {
  id: number;
  totalQuantity: number;
};
type Props = {
  orders: Order[];
};
  
const NumChart = ({ orders }: Props) => {
    const chartData = [...orders]
    .sort((a, b) => b.totalQuantity - a.totalQuantity)
    .slice(0, 8)
    .map((order) => ({
        name: `Order ${order.id}`,
        totalQuantity: order.totalQuantity,
    }));
  return (
    <div className="revenueChart">
      <div className="revenueChartHeader">
        <div>
            <h3>Top Orders by Quantity</h3>
            <p>Orders with the highest product quantities</p>

        </div>
      </div>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{ fontSize: 7 }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 7 }}  />
            <Tooltip formatter={(value) => [`$${value}`, "Revenue"]}/>
            <Bar dataKey="totalQuantity" name="Quantity" radius={[0, 6, 6, 0]} fill="#4F46E5"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NumChart;