import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      finished: false,
    };
    this.gameOver = this.gameOver.bind(this);
  }

  gameOver() {
    if (!this.state.finished) {
      this.setState({ finished: true });
    }
  }

  render() {
    return (
      <>
        <Header finish={this.state.finished} />
        <Main finish={this.state.finished} gameOver={this.gameOver} />
      </>
    );
  }
}

export default App;
