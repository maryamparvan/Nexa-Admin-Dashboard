export type NotificationItem = {
    id: string;
    title: string;
    message: string;
    type: "low-stock";
    read: boolean;
    createdAt: string;
  };
  const NOTIFICATION_KEY = "notifications";
  export const getNotifications = (): NotificationItem[] => {
    return JSON.parse( localStorage.getItem(NOTIFICATION_KEY) || "[]");
  };
  // export const NotificationService = () => {
  //   return [];
  // };
  
  export const saveNotifications = (notifications: NotificationItem[]) => {
    localStorage.setItem(NOTIFICATION_KEY,JSON.stringify(notifications));
    window.dispatchEvent(new Event("notificationsChanged"));
  };
  
  export const addNotification = (notification: NotificationItem) => {
    const notifications = getNotifications();
    const alreadyExists = notifications.some(
        (item) => item.id === notification.id
    );
    if (alreadyExists) return;
    notifications.unshift(notification);
    saveNotifications(notifications);
  };
  
  export const markNotificationAsRead = (id: string) => {
    const notifications = getNotifications();
    const updatedNotifications = notifications.map((item) =>
      item.id === id ? { ...item, read: true } : item
    );
    saveNotifications(updatedNotifications);
  };
  
  export const markAllNotificationsAsRead = () => {
    const notifications = getNotifications();
    const updatedNotifications = notifications.map((item) => ({
      ...item,
      read: true,
    })); 
    saveNotifications(updatedNotifications);
  };