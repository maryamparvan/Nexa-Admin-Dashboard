const OrderService = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    if (!response.ok) {
        throw new Error(`Order API failed: ${response.status}`);
    }
    const data = await response.json();
    if (!data.carts || !Array.isArray(data.carts)) {
        throw new Error("Invalid order data");
    }
    return data.carts;
};
export default OrderService;