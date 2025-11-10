// src/pages/HomePage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import MovieListSection from '../components/MovieListSection';

const HomePage = () => {
  return (
    <Container className="py-4">
      {/* FR2.0: Now Playing Section */}
      <MovieListSection title="🍿 Now Playing Movies" category="now_playing" />

      {/* FR2.0: Upcoming Section */}
      <MovieListSection title="🗓️ Upcoming Movies" category="upcoming" />

      {/* FR2.0: Top Rated Section */}
      <MovieListSection title="⭐ Top Rated Movies" category="top_rated" />
    </Container>
  );
};

export default HomePage;