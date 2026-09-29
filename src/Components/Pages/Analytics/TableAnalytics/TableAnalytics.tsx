import "./TableAnalytics.css";

type Product = {
  discountPercentage: number;
  quantity: number;
};

type Order = {
  id: number;
  userId: number;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  products: Product[];
};
type Props = {
  orders: Order[];
};

const TableAnalytics = ({ orders }: Props) => {
  const getAverageDiscount = (products: Product[]) => {
    if (products.length === 0) return 0;
    const totalDiscount = products.reduce(
      (sum, product) => sum + product.discountPercentage,
      0
    );
    return totalDiscount / products.length;
  };

  return (
    <div className="tableAnalytics">
      <div className="tableAnalyticsHeader">
        <div>
          <h3>Recent Orders</h3>
          <p>Latest orders and their details</p>
        </div>
      </div>
      <div className="tableWrapper">
        <table className="tablediv">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const averageDiscount = getAverageDiscount(order.products);
              return (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>User #{order.userId}</td>
                  <td>{order.totalProducts}</td>
                  <td>{order.totalQuantity}</td>
                  <td>${order.discountedTotal.toFixed(2)}</td>
                  <td>{averageDiscount.toFixed(1)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAnalytics;