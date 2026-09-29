import { IoMdSearch } from "react-icons/io";
import UserService from "../../../Service/UserService/UserService";
import { useEffect, useState } from "react";
import "./User.css"
import { useNavigate } from "react-router-dom";

type User = {
    id: number;
    image: string;
    firstName: string;
    lastName: string;
    phone: string;
    age: number;
    gender: string;
    email: string;
    address: {
        city: string;
    };
};

const User = (() =>{
    const [users, setUsers] = useState<User[]>([]);
    const [gender, setgender] = useState("all");
    const [searchu, setsearchu] = useState("");
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        UserService()
            .then((data) => {
                setUsers(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const filteredUsers = users.filter((userV) => {
        const matchGender = gender === "all" || userV.gender === gender;
        const matchSearch = userV.firstName.toLowerCase().includes(searchu.toLowerCase()) || userV.lastName.toLowerCase().includes(searchu.toLowerCase());
        return matchGender && matchSearch;
    });

    return(
        <div className="useruser">
            <h2> Manage and view all registered users </h2>
            <br />
            <div className="headUser">
                <div className="searchUser">
                    <input type="search" placeholder="search user..." onChange={(e) => setsearchu(e.target.value)} />
                    <IoMdSearch />
                </div>
                <select className="selectUser" onChange={(e) => setgender(e.target.value)}>
                    <option value="all">all</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
            </div>
            <div className="tableContainer">
                <h4>Users : ({filteredUsers.length})</h4>
                <table className="tableUser">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>User</th>
                            <th>Phone</th>
                            <th>Age </th>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody className="tbodyClass">
                        {Loading ? (
                        
                            <td colSpan={6}>
                                Loading...
                            </td>
                        ) :filteredUsers.length === 0 ? (
                            <div>
                                <td colSpan={6}>
                                No users found
                                </td>
                            </div>
                        ) : (
                        filteredUsers.map((user) => (
                            <tr key={user.id} onClick={() => navigate(`/Users/${user.id}`)}>
                                <td><img src={user.image} /> </td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.phone}</td>
                                <td>{user.age}</td>
                                <td>{user.address.city}</td>
                                <td>{user.email}</td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

export default User;