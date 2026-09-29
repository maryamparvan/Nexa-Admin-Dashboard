import { useEffect, useState } from "react";
import UserService from "../../../../Service/UserService/UserService";
import { useParams } from "react-router-dom";
import './UserDetail.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router-dom";

const UserDetail = (() =>{
    const navigate = useNavigate();
    const [users, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        UserService()
            .then((data) => {
                const foundUser = data.find( (useri) => useri.id === Number(id));
                setUser(foundUser);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (Loading) { return <h3>Loading...</h3>; }
    if (!users) { return <h3>User not found</h3>; }
    console.log(users)
    return(
        <div>
            <div className="class">
                <div className="back">
                    <Button fun={() =>navigate("/Users")} className="buttonBack"><FaArrowLeftLong /></Button>
                    <h3> Back to Users </h3>
                </div>
                <div>
                    <h2>User Details</h2>
                    <h3>View detailed information about this user</h3>
                </div>
                <div className="classBoxs">
                    <div className="backimg">
                        <div className="userDetailimage">
                            <img src={users.image} /> 
                        </div>
                        <div className="userMainInfo" >
                            <h3>{users.firstName} {users.lastName}</h3>
                            <h4>{users.email}</h4>
                            <div className="idDivclass">
                                <h4>{users.gender}</h4>
                                <h4>{users.age}</h4>
                                <h4>{users.phone}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="midBoxs">
                        <div className="infoBox">
                            <h2>Personal Information</h2>
                            <p>First Name : {users.firstName}</p>
                            <p>last Name : {users.lastName}</p>
                            <p>username : {users.username}</p>
                            <p>birthDate : {users.birthDate}</p>
                            <p>age : {users.age}</p>
                        </div>
                        <div className="infoBox">
                            <h2>Address</h2>
                            <p>Address  ...</p>
                            <p>city : {users.address.city} </p>
                            <p>state : {users.address.state} </p>
                            <p>country : {users.address.country} </p>
                            <p> street address : {users.address.address} </p>
                        </div>
                        <div className="infoBox">
                            <h2>company</h2>
                            <p>name : {users.company.name} </p>
                            <p>department : {users.company.department} </p>
                            <p>Job Title : {users.company.title} </p>
                            <p>Company Address : {users.company.address.address} </p>
                        </div>
                    </div>
                </div>
                <div className="endBoxid">
                        <h2>Account Information</h2>
                    <div className="endBoxflex">
                    <div className="accountItem">
                        <span>Username</span>
                        <strong>{users.username}</strong>
                    </div>

                    <div className="accountItem">
                        <span>User ID</span>
                        <strong>#{users.id}</strong>
                    </div>

                    <div className="accountItem">
                        <span>Role</span>
                        <strong>User</strong>
                    </div>

                    <div className="accountItem">
                        <span>Blood Group</span>
                        <strong>{users.bloodGroup}</strong>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default UserDetail;