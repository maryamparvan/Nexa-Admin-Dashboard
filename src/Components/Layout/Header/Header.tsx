import checkLowStockNotifications from "../../Pages/Setting/Notification/NotificationGenerator";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "../../Button/Button";
import './Header.css'
import { useLocation, useNavigate } from "react-router-dom";
import { getNotifications, markNotificationAsRead, markAllNotificationsAsRead,type NotificationItem } from "../../Pages/Setting/Notification/NotificationService";

const pageNames: Record<string, string> = {
    "/": "Login",
    "/Dashboard": "Dashboard",
    "/Products": "Products",
    "/Users": "Users",
    "/Orders": "Orders",
    "/Analytics":"Analytics",
    "/Settings": "Settings"
};

const Header = (() =>{
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [currentuser, setcurrentuser] = useState( JSON.parse(localStorage.getItem("currentUser") || "null"));
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const updateUser = () => {
          const user = JSON.parse(localStorage.getItem("currentUser") || "null" );
          setcurrentuser(user);
        };
        window.addEventListener("currentUserChanged", updateUser);
        return () => {
          window.removeEventListener("currentUserChanged", updateUser);
        };
      }, []);
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [notificationOpen, setNotificationOpen] = useState(false);
      useEffect(() => {
        checkLowStockNotifications();
    }, []);
    useEffect(() => {
        const updateNotifications = () => {
            setNotifications(getNotifications());
        };
        updateNotifications();
        window.addEventListener("notificationsChanged",updateNotifications);
        return () => {
            window.removeEventListener("notificationsChanged",updateNotifications);
        };
    }, []);
    const unreadCount = notifications.filter(
        (item) => !item.read
    ).length;
    return(
        <header className="divHeader">
            <h1>{pageNames[location.pathname]}</h1>
            <div className="divRightHeader">
                <div className="notificationWrapper">
                    <Button className="ButtonClass" fun={() => setNotificationOpen(!notificationOpen)}>
                        <IoMdNotificationsOutline />
                        {unreadCount > 0 && (
                            <span className="notificationBadge">
                                {unreadCount}
                            </span>
                        )}
                    </Button>
                    {notificationOpen && (
                        <div className="notificationPanel">
                            <div className="notificationHeader">
                                <h3>Notifications</h3>
                                {unreadCount > 0 && (
                                    <Button fun={markAllNotificationsAsRead}>Mark all as read</Button>
                                )}
                            </div>
                            <div className="notificationList">
                                {notifications.length === 0 ? (
                                    <p className="noNotifications">No notifications</p>
                                ) : (
                                    notifications.map((notification) => (
                                        <div key={notification.id} className={ notification.read ? "notificationItem": "notificationItem unread"} onClick={() =>markNotificationAsRead(notification.id) }>
                                            <h4>{notification.title}</h4>
                                            <p>{notification.message}</p>
                                            <small>{new Date(notification.createdAt).toLocaleString()}</small>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="divUser">
                    <div className="avatar">{currentuser ? ( <img src={currentuser.image} alt={currentuser.firstName} /> ) : ( <p>A</p>)}</div>
                    <Button className="profileInfo" fun={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                        <span>{currentuser ? currentuser.firstName : "login" }</span>
                        <small>Admin</small>
                    </Button>
                    {isUserMenuOpen && (
                        <div className="userMenu">
                        <Link to={`/Users/${currentuser.id}`}>Profile</Link>
                        <Link to="/Setting">Settings</Link>
                        <Button fun={() => { localStorage.removeItem("currentUser"); window.dispatchEvent(new Event("currentUserChanged")); navigate("/", { replace: true })}}>Logout</Button>
                        </div>
                    )}

                </div>
            </div>
        </header>
    )
})

export default Header;