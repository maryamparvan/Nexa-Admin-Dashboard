import "./DiscountDistributionChart.css"
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend} from "recharts";
  
type Product = {
  discountPercentage: number;
};

type Order = {
  id: number;
  products: Product[];
};

type Props = {
  orders: Order[];
};

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#94a3b8",
];

const DiscountDistributionChart = ({ orders }: Props) => {
  const products = orders.flatMap((order) => order.products);

const chartData = [
  {
    name: "0–5%",
    value: products.filter(
      (product) =>
        product.discountPercentage >= 0 &&
        product.discountPercentage < 5
    ).length,
  },
  {
    name: "5–10%",
    value: products.filter(
      (product) =>
        product.discountPercentage >= 5 &&
        product.discountPercentage < 10
    ).length,
  },
  {
    name: "10–15%",
    value: products.filter(
      (product) =>
        product.discountPercentage >= 10 &&
        product.discountPercentage < 15
    ).length,
  },
  {
    name: "15%+",
    value: products.filter(
      (product) => product.discountPercentage >= 15
    ).length,
  },
];
  return (
    <div className="orderValueChart">
      <div className="orderValueChartHeader">
        <div>
          <h3>Discount Distribution</h3>
          <p>Orders grouped by discount percentage</p>
        </div>
      </div>
      <div className="chartContainer">
      <ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={chartData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="45%"
      innerRadius={80}
      outerRadius={120}
      paddingAngle={3}
    >
      {chartData.map((_, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index]}
        />
      ))}
    </Pie>

    <Tooltip
      formatter={(value) => [value, "Orders"]}
    />

    <Legend
      verticalAlign="bottom"
      height={36}
    />
  </PieChart>
</ResponsiveContainer>
      </div>
    </div>
  );
};

export default DiscountDistributionChart;