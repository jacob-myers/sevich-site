import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import logo from "../assets/icon.png";


function JNavbar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
        updateNavbar(true);
        } else {
        updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/services" onClick={() => updateExpanded(false)}>
                                Services
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/portfolio" onClick={() => updateExpanded(false)}>
                                Portfolio
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="navbar-button" as={Link} to='/contact' onClick={() => updateExpanded(false)}>
                                <p style={{marginBottom:'2px'}}>Contact Me</p>
                            </Nav.Link>
                            
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default JNavbar