import React from 'react';
import { Container, MenuList, LinkMenu } from './styles';

import clanMenu from '../../assets/clan-menu.png';
import playerMenu from '../../assets/player-menu.png';
import deckMenu from '../../assets/deck-menu.jpg';
import tournamentMenu from '../../assets/tournament-menu.png';

export default function Home() {
  return (
    <Container>
      <MenuList>
        <ul>
          <li>
            <img src={playerMenu} alt="Player" />
            <LinkMenu to="/players">Player Search</LinkMenu>
          </li>
          <li>
            <img src={clanMenu} alt="Clans" />
            <LinkMenu to="/clans">Clans</LinkMenu>
          </li>
          <li>
            <img src={deckMenu} alt="Decks" />
            <LinkMenu to="/decks">Decks</LinkMenu>
          </li>
          <li>
            <img src={tournamentMenu} alt="Tournaments" />
            <LinkMenu to="/tournaments">Open Tournaments</LinkMenu>
          </li>
        </ul>
      </MenuList>
    </Container>
  );
}
