import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("app");

function renderApp() {
  render(<App />, rootElement);
}

renderApp();


module.hot.accept(renderApp);