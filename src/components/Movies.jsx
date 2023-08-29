import React, { useEffect } from 'react';

import getAllMovies from '../utils/tmdb';

function Movies() {
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <h1>Movies</h1>
  );
}

export default Movies;
