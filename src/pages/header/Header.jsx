import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../assets/svgs/logo.svg";
import MainBtn from "../../common/main-btn";

const Header = () => {
  const location = useLocation();

  return (
    <div className="w-100 mb-3">
      <Navbar expand="md" className="my" variant="dark">
        <div className="w-100 d-flex flex-row justify-content-between align-items-md-center ">
          <div>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="CH logo" loading="lazing" />
              </Link>
            </Navbar.Brand>
          </div>
          <div className="d-flex align-items-center">
            <div className="toggle">
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                // className="justify-self-end"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  defaultActiveKey="/"
                  activeKey={location.pathname}
                  className="d-flex align-items-center h-100%"
                >
                  <Nav.Item>
                    <Nav.Link href="/" as={Link} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/portfolio" as={Link} to="/portfolio">
                      Portfolio
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item href="/hire">
                    <Nav.Link as={Link} to="/hire">
                      <MainBtn text="Hire me" padding="nav-btn" />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
