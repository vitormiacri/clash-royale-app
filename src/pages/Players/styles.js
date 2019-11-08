import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PlayerSearch = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;
export const InputSearch = styled.input.attrs(props => ({
  disabled: props.loading,
}))`
  color: #999;
  font-size: 0.9rem;
  line-height: 16px;
  border: none;
  border-bottom: 1px solid #999;
  padding: 10px;
  margin: 20px;
  width: 100%;
  text-transform: uppercase;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSearch = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.loading,
}))`
  padding: 10px 15px;
  background: #0e67c2;
  border-radius: 4px;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
  &:hover {
    background: rgba(14, 118, 194, 0.8);
  }
`;
export const PlayerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
  width: 100%;
  max-width: 850px;
  margin-bottom: 20px;
`;

export const PlayerHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  align-items: baseline;
  justify-content: center;
`;

export const PlayerLevel = styled.div`
  background: #0e67c2;
  border-radius: 50%;
  padding: 8px;
  font-size: 18px;
  color: #fff;
  align-self: center;
`;

export const PlayerName = styled.div`
  padding: 5px 10px;
  font-size: 38px;
  font-weight: bold;
  color: #001919;
`;

export const PlayerTag = styled.div`
  padding: 5px 0;
  font-size: 14px;
  color: #999;
`;
export const PlayerTrophies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 35px;
    height: 35px;
  }

  div {
    padding: 5px 10px;
    font-size: 26px;
    font-weight: bold;
    color: #001919;
  }
`;

export const PlayerArena = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 60px;
    height: 60px;
  }

  div {
    padding: 5px 10px;
    font-size: 26px;
    font-weight: bold;
    color: #001919;
  }
`;

export const PlayerClan = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 15px 0;
  width: 100%;
  border-top: 1px solid #ccc;

  .clanTitle {
    display: flex;
    align-items: baseline;
    justify-content: center;
    img {
      align-self: center;
      width: 30px;
    }
    strong {
      padding: 0 10px;
      font-size: 26px;
      color: #001919;
    }

    span {
      font-size: 14px;
      color: #999;
    }
  }

  span {
    padding: 5px 0;
    align-items: baseline;
  }
`;

export const PlayerDeck = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 870px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 15px 0;

    strong {
      padding: 5px 10px;
      font-size: 32px;
      font-weight: bold;
      color: #001919;
    }

    a {
      margin-left: 20px;
      line-height: 20px;
      color: #001919;
      text-decoration: none;
      &:visited {
        color: #001919;
      }
      &:hover {
        color: #0e67c2;
        border-bottom: 1px solid #0e67c2;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      margin: 10px 15px;

      img {
        width: 150px;
      }
    }
  }
`;

export const PlayerChests = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 870px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 15px 0;

    strong {
      padding: 5px 10px;
      font-size: 32px;
      font-weight: bold;
      color: #001919;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      margin: 10px 15px;
      position: relative;

      img {
        width: 100px;
      }

      span {
        position: absolute;
        top: 0;
        right: 0;
        background: #0e67c2;
        padding: 5px 8px;
        color: #fff;
        border-radius: 10px;
        box-shadow: -1px 1px 1px 1px #fff;
      }
    }
  }
`;
export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 15px;
  font-size: 44px;
  color: #001919;
  font-weight: bold;
`;

export const TopPlayerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  margin-bottom: 20px;

  strong {
    padding: 5px 10px;
    margin-bottom: 10px;
    font-size: 2.2rem;
    font-weight: bold;
    color: #001919;
  }
`;
export const PlayerItem = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  margin: 10px 0;
  padding: 30px 0;
  background: #0e67c2;
  color: #fff;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;

  .name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .tag {
    font-size: 0.8rem;
  }

  .level {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .trophies {
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 1.4rem;

    img {
      width: 30px;
      margin-right: 10px;
    }
  }
`;
export const BackButton = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.loading,
}))`
  padding: 10px 15px;
  background: #0e67c2;
  border-radius: 4px;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background: rgba(14, 118, 194, 0.8);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    margin-left: 10px;
    font-size: 1.5rem;
    color: #fff;
  }
`;
