import { useState } from "react";
import "./SettingProfile.css";
import Button from "../../../Button/Button";


const SettingProfile = (() =>{
    const [firstname, setfirstname] = useState("");
    const [email, setemail] = useState("");
    const [change, setchange] = useState(true);
    const [password, setpassword] = useState("");
    const [curpassword, setcurpassword] = useState("");
    const [passwordconf, setpasswordconf] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [userdata, setuserdata] = useState(JSON.parse( localStorage.getItem("currentUser")|| "null"));

    const saveChange = () => {
        const pasUser = JSON.parse(
          localStorage.getItem("currentUser") || "null"
        );
        if (!pasUser) return;
        pasUser.firstName = firstname;
        pasUser.email = email;
        localStorage.setItem( "currentUser", JSON.stringify(pasUser));
        setuserdata(pasUser)
        window.dispatchEvent(new Event("currentUserChanged"));
    };

    const upPassword = () => {
        if (userdata.password !== curpassword) {
          setMessage("Current password is incorrect.");
          setMessageType("error");
        } else if (password.length < 8) {
          setMessage("Password must be at least 8 characters.");
          setMessageType("error");
        } else if (passwordconf !== password) {
          setMessage("New passwords do not match.");
          setMessageType("error");
        } else {
          setMessage("Password changed successfully.");
          setMessageType("success");
        }
      };
    return(
        <div className="profile">
            { change ?(
                <div>
                    <h3> Profile Information</h3>
                    <p>Manage your personal account information and role.</p>
                    <div className="classdiv">
                        <label >Full Name :</label>
                        <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                    </div>
                    <div className="classdiv">
                        <label >Email :</label>
                        <input type="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                    </div>
                    <Button className="buttonSsave" fun={saveChange}>save Changes</Button>
                    <hr />
                    <div>
                        <h3>Password</h3>
                        <p>Keep your account secure by updating your password regularly.</p>
                        <span> Last changed: Not available </span>
                        <Button className="buttonSsave" fun={() =>setchange(!change) }> Change Password </Button>
                    </div>
                </div>
            ):(
                <div className="passwordDiv">
                    <h3>Change Password </h3>
                    <p>Update your password to keep your account secure.</p>
                    <div className="classdiv">
                       <label>Current Password: </label>
                       <input type="password" value={curpassword} onChange={(e) => setcurpassword(e.target.value)}/> 
                    </div>
                    <div className="classdiv">
                        <label>New Password: </label>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className="classdiv">
                        <label>Confirm New Password: </label>
                        <input type="password" value={passwordconf} onChange={(e) => setpasswordconf(e.target.value)}/>
                    </div>
                    <p className="ppassword">Password must be at least 8 characters</p>
                    <span className={messageType}>{message}</span>
                    <div className="buttons">
                        <Button className="buttonPassword" fun={() =>setchange(!change)}>Cancel</Button>
                        <Button className="buttonPassword " fun={upPassword}>Update Password</Button>
                    </div>
                </div>
            )}
        </div>
)})

export default SettingProfile;