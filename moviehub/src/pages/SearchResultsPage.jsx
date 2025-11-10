// src/pages/SearchResultsPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import tmdbApi from '../api/tmdbApi';
import MovieCard from '../components/MovieCard';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    tmdbApi.searchMovies(query)
      .then(data => {
        setResults(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Search error:", err);
        setLoading(false);
      });
  }, [query]);

  return (
    <Container className="py-4">
      <h2 className="text-movie-text mb-4">
        Search Results for: <span className="text-accent">"{query}"</span>
      </h2>
      
      {loading ? (
        <div className="text-center p-5">
          <Spinner animation="border" variant="info" role="status" aria-label="Loading search results" />
        </div>
      ) : results.length > 0 ? (
        <Row>
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      ) : (
        <Alert variant="info" className="bg-movie-light-blue text-movie-text border-movie-accent">
          No movies found matching your search. Try a different title.
        </Alert>
      )}
    </Container>
  );
};

export default SearchResultsPage;