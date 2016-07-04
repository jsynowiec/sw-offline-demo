require('./MovieGrid.less');

import React, { PropTypes } from 'react';

import MoviTile from './MovieTile';

const propTypes = {
  movies: PropTypes.array.isRequired,
};

const MovieGrid = (props) => {
  const movieTiles = props.movies.map(
    (tile) => (
      <MoviTile
        key={tile.id}
        id={tile.id}
        title={tile.title}
        releaseDate={tile.release_date}
        avgRating={tile.vote_average}
        image={`https://image.tmdb.org/t/p/w342${tile.poster_path}`}
        overview={tile.overview}
      />
    )
  );

  return (
    <div className="movie-grid">
      {movieTiles}
    </div>
  );
};

MovieGrid.propTypes = propTypes;

export default MovieGrid;
