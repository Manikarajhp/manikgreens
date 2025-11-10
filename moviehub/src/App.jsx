// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <Router>
      <Navbar /> {/* FR6.0: Consistent Navigation */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} /> {/* FR5.0 */}
          <Route path="/search" element={<SearchResultsPage />} /> {/* FR3.0 */}
          {/* Add a basic catch-all/404 route for better user experience */}
          <Route path="*" element={<h1 className='text-center text-movie-text py-5'>404 | Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;