import React, { useState } from 'react';
import './Notifications.css';
import avatar1 from '../../images/avatar-mark-webber.webp'
import avatar2 from '../../images/avatar-angela-gray.webp'
import avatar3 from '../../images/avatar-jacob-thompson.webp'
import avatar4 from '../../images/avatar-rizky-hasanuddin.webp'
import avatar5 from '../../images/avatar-kimberly-smith.webp'
import imagechees from '../../images/image-chess.webp'
import avatar6 from '../../images/avatar-nathan-peterson.webp'
import avatar7 from '../../images/avatar-anna-kim.webp'


const notificationsData = [
  { id: 1, user: 'Mark Webber', avatar: avatar1, action: 'reacted to your recent post', content: 'My first tournament today!', time: '1m ago', read: false },
  { id: 2, user: 'Angela Gray', avatar: avatar2, action: 'followed you', time: '5m ago', read: false },
  { id: 3, user: 'Jacob Thompson', avatar: avatar3, action: 'has joined your group', content: 'Chess Club', time: '1 day ago', read: false },
  { id: 4, user: 'Rizky Hasanuddin', avatar: avatar4, action: 'sent you a private message', message: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.', time: '5 days ago', read: true },
  { id: 5, user: 'Kimberly Smith', avatar: avatar5, image: imagechees, action: 'commented on your picture', time: '1 week ago', read: true },
  { id: 6, user: 'Nathan Peterson', avatar: avatar6, action: 'reacted to your recent post', content: '5 end-game strategies to increase your win rate', time: '2 weeks ago', read: true },
  { id: 7, user: 'Anna Kim', avatar: avatar7, action: 'left the group', content: 'Chess Club', time: '2 weeks ago', read: true }
];

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllAsRead = () => {
      setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="notifications-container">
        <div className="notifications-header">
            <h3>Notifications</h3>
            {unreadCount > 0 && <span className="unread-count">{unreadCount}</span>}
            <button onClick={markAllAsRead} className="mark-as-read">Mark all as read</button>
        </div>
        <ul className="notifications-list">
            {notifications.map(notification => (
                <li key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'} ${[1, 2, 3].includes(notification.id) ? 'highlight' : ''}`}>
                    <div className="notification-avatar">
                        <img src={notification.avatar} alt={`${notification.user}'s avatar`} />
                    </div>
                    <div className="notification-content">
                        <div className="notification-text">
                            <strong>{notification.user}</strong> {notification.action} {notification.content && <a href='#' className="notification-extra">{notification.content}</a>}
                        {notification.image && (
                            <div className="notification-inline-image">
                                <img src={notification.image} alt="content" />
                            </div>
                        )}
                        </div>

                        {notification.message && (
                            <div className="notification-message">
                                <p>{notification.message}</p>
                            </div>
                        )}
                    </div>
                    <p className="notification-time">{notification.time}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Notifications;