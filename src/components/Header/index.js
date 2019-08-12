import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Menu</Link>
        </li>
      </ul>
    </Container>
  );
}
