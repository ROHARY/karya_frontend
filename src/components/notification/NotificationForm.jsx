import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../../styles/notification/NotificationForm.css";
import { useSelector } from "react-redux";

const NotificationForm = ({ onSend }) => {
  const {currentUser} = useSelector((data)=> data.currentContext)
  const [formData, setFormData] = useState({
    from: currentUser.email,
    recipient: "",
    body: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSend) onSend(formData);
  };

  return (
    <Card className="send-form-card shadow-sm">
      <Card.Body>
        <h4 className="mb-4 text-primary fw-bold">Send Notification</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFrom">
            <Form.Label>Sender</Form.Label>
            <Form.Control
              type="email"
              name="from"
              placeholder="Enter sender's email"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRecipient">
            <Form.Label>Recipient</Form.Label>
            <Form.Control
              type="email"
              name="recipient"
              placeholder="Enter recipient's email"
              value={formData.recipient}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBody">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="body"
              placeholder="Type your message here..."
              value={formData.body}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-end">
            <Button variant="primary" type="submit" className="px-4">
              Send
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NotificationForm;