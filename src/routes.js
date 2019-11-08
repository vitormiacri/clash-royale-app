import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Players from './pages/Players';
import Home from './pages/Home';
import Clans from './pages/Clans';
import Decks from './pages/Decks';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/players" exact component={Players} />
      <Route path="/clans" exact component={Clans} />
      <Route path="/decks" exact component={Decks} />
    </BrowserRouter>
  );
}
