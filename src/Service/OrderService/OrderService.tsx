

const OrderService = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();

    return data.carts;
};

export default OrderService;