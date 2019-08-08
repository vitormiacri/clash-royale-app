import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Players from './pages/Players';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Players} />
    </BrowserRouter>
  );
}
