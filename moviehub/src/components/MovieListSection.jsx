// src/components/MovieListSection.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import tmdbApi from '../api/tmdbApi';
import MovieCard from './MovieCard';

const MovieListSection = ({ title, category }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    tmdbApi.fetchMovies(category)
      .then(data => {
        if (isMounted) {
            setMovies(data);
            setLoading(false); // NFR1.0: Stop loading indicator
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        if (isMounted) {
            setLoading(false);
        }
      });
      
    return () => {
        isMounted = false; // Cleanup for unmounted component
    };
  }, [category]);

  return (
    <section className="my-5">
      <h2 className="text-movie-text border-bottom border-movie-accent pb-2 mb-4">
        {title}
      </h2>
      
      {loading ? (
        <div className="text-center p-5">
          <Spinner animation="border" variant="info" role="status" aria-label={`Loading ${title}`} />
          <p className="mt-2 text-movie-text">Loading movies...</p>
        </div>
      ) : (
        <Row className="g-4 flex-nowrap overflow-auto py-2"> 
        
        {/* FR2.0: Scrollable list, NFR3.0: Responsiveness via col classes in MovieCard */}
          {movies.map(movie => (
            // Using a plain div wrapper here to enable horizontal scroll and prevent card wrapping
            <div key={movie.id} className="col-2 col-sm-4 col-md-3 col-lg-2" style={{minWidth: '200px'}}>
              
                <MovieCard movie={movie} />
            </div>
          ))}
        </Row>
      )}
    </section>
  );
};

export default MovieListSection;