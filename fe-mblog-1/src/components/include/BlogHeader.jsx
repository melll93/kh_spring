import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/dept" className="nav-link">
              부서관리
            </Link>
            <Link to="/board" className="nav-link">
              게시판
            </Link>
            <Link to="/member" className="nav-link">
              회원관리
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default BlogHeader;
