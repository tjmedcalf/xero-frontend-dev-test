import React from 'react';
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Hello!</h2>
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("app");

function renderApp() {
  render(<App />, rootElement);
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}