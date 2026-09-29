import {  getNotifications, markNotificationAsRead, markAllNotificationsAsRead,type NotificationItem } from "../../../../Components/Pages/Setting/Notification/NotificationService";

import { useEffect, useState } from "react";
  import "./NotificationProfile.css";
import Button from "../../../Button/Button";
  
  const NotificationProfile = () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  
    useEffect(() => {
      const loadNotifications = () => {
        setNotifications(getNotifications());
      };

      loadNotifications();  
      window.addEventListener("notificationsChanged", loadNotifications);
      return () => {
        window.removeEventListener("notificationsChanged",loadNotifications);
      };
    }, []);
    const unreadCount = notifications.filter(
      (item) => !item.read).length;
  
    return (
      <div className="notificationProfile">
        <div className="notificationProfileHeader">
          <div>
            <h2>Notifications</h2>
            <p>{unreadCount} unread notification</p>
          </div>
          {unreadCount > 0 && (
            <Button fun={markAllNotificationsAsRead}> Mark all as read </Button>
          )}
        </div>
        <div className="notificationProfileList">
          {notifications.length === 0 ? (
            <div className="emptyNotification">
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div key={notification.id} className={`notificationProfileItem ${ notification.read ? "read" : "unread"}`} onClick={() =>markNotificationAsRead(notification.id)}>
                <div className="notificationContent">
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                  <small>{new Date(notification.createdAt).toLocaleString()}</small>
                </div>
                {!notification.read && (
                  <span className="unreadDot"></span>
                )}
              </div>
            ))
          )}
  
        </div>
      </div>
    );
  };
  
  export default NotificationProfile;