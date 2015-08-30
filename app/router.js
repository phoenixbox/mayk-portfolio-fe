import React from 'react/addons';
import Router, { Route, DefaultRoute } from 'react-router';
import App from './views/app';

export default function() {
  React.render(<App />, document.getElementById('mayk'));
}
