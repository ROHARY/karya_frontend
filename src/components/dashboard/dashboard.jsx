import React from "react";
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaClipboardList, FaBell } from "react-icons/fa";
import "../../styles/dashboard/DashboardLayout.css"; // Add external styles if needed
import { useSelector } from "react-redux";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.includes(path);
  const {currentUser} = useSelector((data)=> data.currentContext)
  return (
    <div className="vh-100">
      {/* Top Navbar */}
      <Navbar bg="success" variant="dark" className="px-4">
        <Navbar.Brand className="me-auto fw-bold fs-4">Rohary</Navbar.Brand>
        <h6 className='mx-3' style={{color: 'white'}}>Welcome, {currentUser.firstName} </h6>
        <Image
          src="https://i.pravatar.cc/40"
          roundedCircle
          width={40}
          height={40}
          alt="User Avatar"
        />
      </Navbar>

      <Container fluid className="h-100">
        <Row className="h-100">
          {/* Vertical Sidebar */}
          <Col md={2} className="bg-light border-end p-0">
            <h3 className="px-4 pt-4">Apps</h3>
            <Nav className="flex-column py-4 nav-pills gap-2">
              <Nav.Link
                className={`d-flex align-items-center gap-2 px-4 py-3 sidebar-link ${!isActive("notifications") ? "active-link" : ""}`}
                onClick={() => navigate("")}
              >
                <div className="indicator"></div>
                <FaClipboardList /> <span>Todos</span>
              </Nav.Link>
              <Nav.Link
                className={`d-flex align-items-center gap-2 px-4 py-3 sidebar-link ${isActive("notifications") ? "active-link" : ""}`}
                onClick={() => navigate("notifications")}
              >
                <div className="indicator"></div>
                <FaBell /> <span>Notifications</span>
              </Nav.Link>
            </Nav>
          </Col>

          {/* Content Area */}
          <Col md={10} className="p-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
