import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import {
  Container,
  LoadingContainer,
  DeckList,
  DeckItem,
  Popularity,
  Cards,
} from './styles';

import api from '../../services/api';
import Header from '../../components/Header';

export default function Decks() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(1);
  const [error, setError] = useState(0);

  async function loadDecks() {
    const response = await api.get('/popular/decks', {
      params: {
        max: 10,
        page: 0,
      },
    });

    if (response.data.length > 0) {
      setLoading(0);
      setDecks(response.data);
    } else {
      setLoading(0);
      setError(1);
    }
  }

  useEffect(() => {
    try {
      setError(0);
      loadDecks();
    } catch (err) {
      setError(1);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <strong>Top 10 Decks</strong>
        {loading ? (
          <LoadingContainer loading={loading}>
            <FaSpinner color="#000" size={92} />
          </LoadingContainer>
        ) : (
          <DeckList>
            {decks.map((deck, index) => (
              <li key={index}>
                <DeckItem
                  href={deck.decklink}
                  title="Copy Deck"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Popularity>Popularity: {deck.popularity}</Popularity>
                  <Cards>
                    {deck.cards.map(card => (
                      <ul key={card.id}>
                        <li>
                          <img
                            src={card.icon}
                            alt={card.name}
                            title={card.name}
                          />
                        </li>
                      </ul>
                    ))}
                  </Cards>
                </DeckItem>
              </li>
            ))}
          </DeckList>
        )}
      </Container>
      {error ? <div className="empty">Decks not found</div> : ''}
    </>
  );
}
