import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Players from './pages/Players';
import Home from './pages/Home';
import Clans from './pages/Clans';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/players" exact component={Players} />
      <Route path="/clans" exact component={Clans} />
    </BrowserRouter>
  );
}
