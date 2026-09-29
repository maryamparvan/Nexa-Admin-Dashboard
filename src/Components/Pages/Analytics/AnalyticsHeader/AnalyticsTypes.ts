export type Product = {
    discountPercentage: number;
    quantity: number;
};

export type Order = {
    id: number;
    userId: number;
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
    products: Product[];
};