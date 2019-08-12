import React, { useState, useEffect } from 'react';

import { FaSearch, FaSpinner, FaArrowLeft } from 'react-icons/fa';

import {
  Container,
  PlayerSearch,
  InputSearch,
  ButtonSearch,
  PlayerInfo,
  Empty,
  PlayerHeader,
  PlayerName,
  PlayerLevel,
  PlayerTag,
  PlayerTrophies,
  PlayerArena,
  PlayerClan,
  PlayerDeck,
  PlayerChests,
  TopPlayerList,
  PlayerItem,
  BackButton,
} from './styles';

import api from '../../services/api';
import Header from '../../components/Header';

export default function Players() {
  const [playerTag, setPlayerTag] = useState('');
  const [player, setPlayer] = useState({});
  const [topPlayers, setTopPlayers] = useState([]);
  const [chests, setChests] = useState({});
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  async function handleSearchPlayer(tag) {
    try {
      let playerTagSearch = '';
      setPlayer({});
      setLoading(1);
      setTopPlayers([]);
      if (tag) {
        playerTagSearch = tag;
      } else {
        playerTagSearch = playerTag;
      }
      setPlayerTag(playerTagSearch);
      const playerSearch = await api.get(`/player/${playerTagSearch}`);
      const chestSearch = await api.get(`/player/${playerTagSearch}/chests`);

      setChests(chestSearch.data);
      setPlayer(playerSearch.data);
    } catch (errors) {
      setError(1);
    } finally {
      setLoading(0);
    }
  }

  function TopPlayers() {
    return (
      <TopPlayerList>
        <strong>Top 20 BR Players</strong>
        {topPlayers.map(p => (
          <PlayerItem key={p.tag} onClick={() => handleSearchPlayer(p.tag)}>
            <span className="name">{p.name}</span>
            <span className="tag">#{p.tag}</span>
            <span className="level">{p.expLevel}</span>
            <span className="trophies">
              <img
                src="https://royaleapi.com/static/img/ui/trophy.png"
                alt="Troféu"
              />
              {p.trophies}
            </span>
          </PlayerItem>
        ))}
      </TopPlayerList>
    );
  }

  async function loadTopPlayers() {
    try {
      setPlayer({});
      setLoading(1);
      setPlayerTag('');
      const topPlayersSearch = await api.get(`/top/player/BR`);
      setTopPlayers(topPlayersSearch.data.slice(0, 20));
      setLoading(0);
    } catch (errors) {
      setError(1);
    } finally {
      setLoading(0);
    }
  }

  useEffect(() => {
    // const tag = 'yuc8gj';
    loadTopPlayers();
  }, []);

  function PlayerDetails() {
    const { arena, stats, clan, currentDeck } = player;
    return (
      <>
        <BackButton onClick={() => loadTopPlayers()}>
          <FaArrowLeft color="#FFF" size={24} />
          <strong>Voltar</strong>
        </BackButton>
        <PlayerInfo>
          <PlayerHeader>
            <PlayerLevel>{stats.level}</PlayerLevel>
            <PlayerName>{player.name}</PlayerName>
            <PlayerTag>{`#${player.tag}`}</PlayerTag>
          </PlayerHeader>
          <PlayerTrophies>
            <img
              src="https://royaleapi.com/static/img/ui/trophy.png"
              alt="Troféu"
            />
            <div>{player.trophies}</div>
          </PlayerTrophies>
          <PlayerArena>
            <img
              src={`https://royaleapi.github.io/cr-api-assets/arenas/arena${arena.arenaID}.png`}
              alt="Arena"
            />
            <div>{arena.name}</div>
          </PlayerArena>
          <PlayerClan>
            <div className="clanTitle">
              <img src={clan.badge.image} alt={clan.name} />
              <strong>{clan.name}</strong>
              <span>#{clan.tag}</span>
            </div>

            <span>Doações: {clan.donations}</span>
            <span>Recebidas: {clan.donationsReceived}</span>
          </PlayerClan>
        </PlayerInfo>
        <PlayerDeck>
          <div>
            <strong>Deck Atual</strong>
            <a href={player.deckLink} rel="noopener noreferrer" target="_blank">
              Copiar Deck
            </a>
          </div>
          <ul>
            {currentDeck.map(card => (
              <li key={card.key}>
                <img src={card.icon} alt={card.name} />
              </li>
            ))}
          </ul>
        </PlayerDeck>
        <PlayerChests>
          <div>
            <strong>Próximos Baús</strong>
          </div>
          <ul>
            {chests.upcoming.map((chest, index) => (
              <li key={index}>
                <img
                  src={`https://royaleapi.github.io/cr-api-assets/chests/chest-${chest}.png`}
                  alt={`+ ${chest}`}
                />
                <span>{`+ ${index + 1}`}</span>
              </li>
            ))}
            <li>
              <img
                src="https://royaleapi.github.io/cr-api-assets/chests/chest-epic.png"
                alt="Baú Épico"
              />
              <span>{`+ ${chests.epic}`}</span>
            </li>
            <li>
              <img
                src="https://royaleapi.github.io/cr-api-assets/chests/chest-giant.png"
                alt="Baú Gigante"
              />
              <span>{`+ ${chests.giant}`}</span>
            </li>
            <li>
              <img
                src="https://royaleapi.github.io/cr-api-assets/chests/chest-legendary.png"
                alt="Baú Lendário"
              />
              <span>{`+ ${chests.legendary}`}</span>
            </li>
            <li>
              <img
                src="https://royaleapi.github.io/cr-api-assets/chests/chest-magical.png"
                alt="Baú Mágico"
              />
              <span>{`+ ${chests.magical}`}</span>
            </li>
            <li>
              <img
                src="https://royaleapi.github.io/cr-api-assets/chests/chest-megalightning.png"
                alt="Baú Mega Raio"
              />
              <span>{`+ ${chests.megaLightning}`}</span>
            </li>
          </ul>
        </PlayerChests>
      </>
    );
  }

  return (
    <Container>
      <Header />
      <PlayerSearch>
        <InputSearch
          type="text"
          loading={loading}
          value={playerTag}
          onChange={e => setPlayerTag(e.target.value)}
          placeholder="Digite a TAG do Jogador"
        />
        <ButtonSearch
          loading={loading}
          onClick={() => handleSearchPlayer(null)}
        >
          {loading ? (
            <FaSpinner color="#FFF" size={24} />
          ) : (
            <FaSearch color="#FFF" size={24} />
          )}
        </ButtonSearch>
      </PlayerSearch>
      {Object.keys(player).length > 0 ? <PlayerDetails /> : ''}
      {Object.keys(topPlayers).length > 0 ? <TopPlayers /> : ''}
      {error ? <Empty>Jogador não encontrado</Empty> : ''}
    </Container>
  );
}
