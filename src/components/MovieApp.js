import React from 'react';

import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

import MovieGrid from './MovieGrid';
import Movie from './Movie';

const styles = {
  container: {
    padding: 8,
  },
};

class MovieApp extends React.Component {
  constructor() {
    super();

    this.state = {
      nowPlaying: [],
      currentHash: window.location.hash,
      title: 'Movies',
    };

    this.navigate = this.navigate.bind(this);
    this.handleBackTap = this.handleBackTap.bind(this);
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=9d69ecb32f641114795a53e117d83588')
      .then(response => response.json())
      .then(body => {
        this.setState({
          nowPlaying: body.results || [],
        });
      });

    window.addEventListener('hashchange', this.navigate);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.navigate);
  }
  navigate() {
    this.setState({
      currentHash: window.location.hash,
    });
  }
  handleBackTap() {
    window.location.hash = '#/';
  }
  render() {
    const hash = this.state.currentHash.replace(/^#\/?|\/$/g, '').split('/');

    let content;
    let title = this.state.title;
    let canGoBack = false;

    switch (hash[0]) {
      case 'movies':
        if (hash.length > 0) {
          let data = this.state.nowPlaying.find(el => el.id === parseInt(hash[1], 10));
          if (data) {
            canGoBack = true;
            content = <Movie data={data} />;
            title = data.title;
          }
        }
        break;
      case '':
        content = (<div>
          <Subheader>Now Playing</Subheader>
          <MovieGrid movies={this.state.nowPlaying} />
        </div>);
        break;
      default:
        content = <p>Not found</p>;
    }

    return (<div>
      <AppBar
        title={title}
        iconElementLeft={<IconButton onTouchTap={this.handleBackTap}>
          <NavigationChevronLeft />
        </IconButton>}
        showMenuIconButton={canGoBack}
      />
      <div style={styles.container}>
        {content}
      </div>
    </div>);
  }
}

export default MovieApp;
