const API_URL = "https://dummyjson.com/users";

const UserService = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.users;
};

export default UserService;