/* eslint import/no-unresolved: 0 */

require('./app.less');
require('file?name=[name].[ext]!../index.html');
require('file?name=[name].[ext]!../offline.html');

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './app-theme';

import MovieApp from './components/MovieApp';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <MovieApp />
  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById('main')
);
