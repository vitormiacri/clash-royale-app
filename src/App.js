import React, { Component } from "react";

import GlobalStyle from "./styles/global";

import api from "./services/api";

class App extends Component {
  state = {
    cards: []
  };

  async componentDidMount() {
    const playerTag = "yuc8gj";
    const response = await api.get(`/player/${playerTag}`);

    console.log(response.data);
  }

  render() {
    return (
      <>
        <h1>Teste</h1>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
