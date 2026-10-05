const API_URL = "https://api.untera.io/api/v1/listings/search?country=ES&pageSize=10";

const Service = async () => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                "X-API-Key": import.meta.env.VITE_UNTERA_API_KEY,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch properties: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Property API Error:", error);
        throw error;
    }
};

export default Service;