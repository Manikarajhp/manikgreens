// src/pages/MovieDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import tmdbApi, { IMAGE_BASE_URL_HIGHRES } from '../api/tmdbApi';

const FALLBACK_IMAGE = 'https://via.placeholder.com/500x750?text=Poster+Not+Available';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    tmdbApi.fetchMovieDetails(id)
      .then(data => {
        if (data) {
          setMovie(data);
        } else {
          setError("Movie details could not be loaded.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Detail Fetch Error:", err);
        setError("An error occurred while fetching movie details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="info" role="status" aria-label="Loading movie details" />
        <p className="mt-2 text-movie-text">Loading movie details...</p>
      </Container>
    );
  }

  if (error || !movie) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error || "Movie not found."}</Alert>
      </Container>
    );
  }

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL_HIGHRES}${movie.poster_path}`
    : FALLBACK_IMAGE;

  // FR5.0: Extract required details
  const genres = movie.genres ? movie.genres.map(g => g.name).join(', ') : 'N/A';
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A';
  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  const releaseDate = movie.release_date || 'N/A';

  return (
    <Container className="py-4">
      <Row>
        {/* FR5.0: Movie Poster (High-Res) */}
        <Col md={4} className="mb-4">
          <img 
            src={posterUrl} 
            alt={`${movie.title} Poster`} 
            className="img-fluid rounded shadow-lg" 
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          />
        </Col>

        {/* FR5.0: Movie Details */}
        <Col md={8}>
          <h1 className="text-movie-text fw-bold">{movie.title}</h1>
          
          <p className="fs-5 text-accent">{movie.tagline}</p>
          
          <hr className="border-movie-accent" />

          <Row className="mb-3">
            <Col sm={4}>
                <h5 className="text-movie-text">⭐ Rating:</h5>
                <p className="fs-4 text-movie-rating-good fw-bold">{voteAverage} / 10</p>
            </Col>
            <Col sm={4}>
                <h5 className="text-movie-text">📅 Release Date:</h5>
                <p>{releaseDate}</p>
            </Col>
            <Col sm={4}>
                <h5 className="text-movie-text">⏱️ Runtime:</h5>
                <p>{runtime}</p>
            </Col>
          </Row>

          <h5 className="text-movie-text">🏷️ Genres:</h5>
          <p className="mb-4">{genres}</p>
          
          <h5 className="text-movie-text">📖 Plot/Description:</h5>
          <p className="lead">{movie.overview || "No plot description available."}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailPage;