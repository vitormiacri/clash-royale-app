import React, { Component } from 'react';

import { FaSearch, FaSpinner } from 'react-icons/fa';

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
} from './styles';

import api from '../../services/api';

class Players extends Component {
  state = {
    player: {},
    chests: {},
    playerTag: '',
    loading: 0,
    error: 0,
  };

  async componentDidMount() {
    // const tag = 'yuc8gj';
    // const players = await api.get(`/player/${tag}`);
    // const chests = await api.get(`/player/${tag}/chests`);
    // this.setState({ player: players.data, chests: chests.data, loading: 0 });
  }

  handleSearchPlayer = async () => {
    try {
      const { playerTag } = this.state;

      this.setState({ player: {}, loading: 1 });

      const players = await api.get(`/player/${playerTag}`);
      const chests = await api.get(`/player/${playerTag}/chests`);

      this.setState({
        player: players.data,
        chests: chests.data,
        loading: 0,
        error: 0,
      });
    } catch (error) {
      this.setState({ error: 1 });
    } finally {
      this.setState({ loading: 0 });
    }
  };

  handleInputChange = e => {
    this.setState({ playerTag: e.target.value });
  };

  render() {
    const { player, loading, error, chests } = this.state;
    const { arena, stats, clan, currentDeck } = player;
    return (
      <Container>
        <PlayerSearch>
          <InputSearch
            type="text"
            loading={loading ? 1 : 0}
            onChange={this.handleInputChange}
            placeholder="Digite a TAG do Jogador"
          />
          <ButtonSearch
            loading={loading ? 1 : 0}
            onClick={this.handleSearchPlayer}
          >
            {loading ? (
              <FaSpinner color="#FFF" size={24} />
            ) : (
              <FaSearch color="#FFF" size={24} />
            )}
          </ButtonSearch>
        </PlayerSearch>
        {Object.keys(player).length > 0 ? (
          <>
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
                <a
                  href={player.deckLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
        ) : (
          ''
        )}
        {error ? <Empty>Jogador não encontrado</Empty> : ''}
      </Container>
    );
  }
}

export default Players;
