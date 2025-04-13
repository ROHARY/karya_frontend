import React from "react";
import "../../styles/notification/Notification.css";
import { Card } from "react-bootstrap";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";

const NotificationCard = ({ from, recipient, body }) => {
  return (
    <Card className="notification-card shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <FaUserCircle size={28} className="me-2 text-primary" />
          <div>
            <h6 className="mb-0">From: <span className="text-dark-emphasis">{from}</span></h6>
            <small className="text-muted">To: {recipient}</small>
          </div>
        </div>
        <div className="email-body">
          <FaEnvelope className="me-2 text-secondary" />
          <span>{body}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NotificationCard;
