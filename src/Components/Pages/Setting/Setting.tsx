import { useState } from "react";
import Button from "../../Button/Button"
import "./Setting.css";
import SettingProfile from "./SettingProfile/SettingProfile";
import NotificationProfile from "./Notification/NotificationProfile";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import Appearance from "./Appearance/Appearance"

const Setting = (() =>{
    const [list, setlist] = useState("Account")
    return(
        <div className="settinging">
            <h3>Manage your account and dashboard preferences</h3>
            <div className="bodySetting">
                <div>
                    <ul className="ulsetting">
                        <li><MdAccountCircle /><Button className="ulbutton" fun={()=>setlist("Account")}>Account</Button></li>
                        <li><IoIosColorPalette /><Button className="ulbutton" fun={()=>setlist("Appearance")}>Appearance</Button></li>
                        <li><IoMdNotificationsOutline /><Button className="ulbutton" fun={()=>setlist("Notifications")}>Notifications</Button></li>
                    </ul>
                </div>
                <div>
                    {list === "Account" && (
                        <div>
                            <SettingProfile />
                        </div>
                    )}
                    {list === "Appearance" && (
                        <div>
                            <Appearance />
                        </div>
                    )}
                    {list === "Notifications" && (
                        <div>
                            <NotificationProfile />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})

export default Setting