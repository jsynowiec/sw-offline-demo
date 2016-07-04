import React, { PropTypes } from 'react';

const propTypes = {
  data: PropTypes.object.isRequired,
};

const styles = {
  pre: {
    fontSize: '0.8em',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
};

const Movie = (props) => (
  <pre style={styles.pre}>{JSON.stringify(props.data, null, 2)}</pre>
);

Movie.propTypes = propTypes;

export default Movie;
