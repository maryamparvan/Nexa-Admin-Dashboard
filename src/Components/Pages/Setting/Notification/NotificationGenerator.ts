import ProductService from "../../../../Service/NotificationService/NotificationService";
import { addNotification } from "./NotificationService";

const checkLowStockNotifications = async () => {
  const products = await ProductService();
  products.forEach((product: any) => {
    if (product.stock <= 5) {
      addNotification({
        id: `low-stock-${product.id}`,
        type: "low-stock",
        title: "Low Stock",
        message: `${product.title} has only ${product.stock} items left.`,
        read: false,
        createdAt: new Date().toISOString(),
      });
    }
  });
};
export default checkLowStockNotifications;