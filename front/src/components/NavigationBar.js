import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { UserRole } from "./UserRole";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const linkStyle = {
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
    borderRight: "1px solid white",
    padding: "15px",
    marginLeft: "100px",
  };

  const role = UserRole();
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to SignOut")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const renderNavLink = (to, text) => (
    <Nav.Link>
      <NavLink
        to={to}
        style={({ isActive }) => ({
          ...linkStyle,
          fontWeight: isActive ? "bold" : "",
          fontSize: isActive ? "25px" : "20px",
        })}
      >
        {text}
      </NavLink>
    </Nav.Link>
  );

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Nav className="w-100 d-flex justify-content-between">
          {renderNavLink("/", "Home")}
          {renderNavLink("/about", "About")}
          {renderNavLink("/products", "Products")}

          {role === "admin" && renderNavLink("/customers", "Customers")}
          {role === "user" && renderNavLink("/profile", "Profile")}

          <Nav.Link>
            {role ? (
              <Link
                to="/"
                onClick={handleSignOut}
                style={{
                  ...linkStyle,
                  borderRight: "none",
                  border: "3px solid grey",
                  borderRadius: "10px",
                  marginLeft: "190px",
                  padding: "8px",
                }}
              >
                Sign Out
              </Link>
            ) : (
              <Link
                to="/signUp"
                style={{
                  ...linkStyle,
                  borderRight: "none",
                  border: "3px solid grey",
                  borderRadius: "10px",
                  marginLeft: "190px",
                  padding: "8px",
                }}
              >
                Sign Up/In
              </Link>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
