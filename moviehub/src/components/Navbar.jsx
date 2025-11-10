// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MovieHubNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Navbar 
      variant="dark" 
      expand="md" 
      sticky="top" 
      className="shadow" // NFR6.0: Consistent navigation
      aria-label="Main navigation menu" // NFR4.0
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-movie-text fw-bold fs-4">
          🎬 MovieHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-movie-text">Home</Nav.Link>
            {/* Future links go here */}
          </Nav>
          {/* FR3.0: Persistent Search Bar */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search movies..."
              className="me-2 bg-movie-dark-blue text-movie-text border-movie-accent"
              aria-label="Search movie by name" // NFR4.0
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-info" type="submit" className="text-movie-text border-movie-accent">
                Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MovieHubNavbar;