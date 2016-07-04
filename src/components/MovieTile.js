require('./MovieTile.less');

import React, { PropTypes } from 'react';

import Paper from 'material-ui/Paper';

const propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

const MovieTile = (props) => (
  <Paper
    className="movie-tile"
    onTouchTap={() => { window.location.hash = `#/movies/${props.id}`; }}
  >
    <img src={props.image} className="movie-tile--image" role="presentation" />
    <div className="movie-tile--content">
      <span className="movie-tile--content--title">{props.title}</span>
      <span className="movie-tile--content--subtitle">
        {props.releaseDate} ({props.avgRating} ⭐️)
      </span>
      <span className="movie-tile--content--overview">{props.overview}</span>
    </div>
  </Paper>
);

MovieTile.propTypes = propTypes;

export default MovieTile;
