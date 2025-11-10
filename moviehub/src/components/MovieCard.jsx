// src/components/MovieCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../api/tmdbApi';

const FALLBACK_IMAGE = 'https://via.placeholder.com/500x750?text=No+Poster'; // Fallback Image (Technical Consideration)

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : FALLBACK_IMAGE;

  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  const getRatingClass = (vote) => {
    if (vote >= 7.0) return 'rating-high';
    if (vote >= 5.0) return 'rating-mid';
    return 'rating-low';
  };

  return (
    <div style={{ width:'150px'}} className="col-3 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex">
      <Card  className="w-200 flex-grow-1">
        <Link 
            to={`/movie/${movie.id}`} 
            aria-label={`View details for ${movie.title}`} // NFR4.0: Accessibility
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="position-relative">
            <Card.Img 
                variant="top" 
                src={posterUrl} 
                alt={`${movie.title} Poster`} 
                style={{ width:'150px', height: '200px', objectFit: 'cover' }}
            />
            <span className={`rating-badge ${getRatingClass(movie.vote_average)}`}>
              {voteAverage}
            </span>
          </div>
          <Card.Body className="p-2">
            <Card.Title className="fs-6 text-truncate mb-0" title={movie.title}>
              {movie.title}
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default MovieCard;