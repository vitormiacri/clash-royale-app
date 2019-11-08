import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    margin: 10px 0;
    font-size: 2rem;
    font-weight: bold;
    color: #001919;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  margin: 20px 0;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const DeckList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    background-color: #0e67c2;
    border-radius: 4px;
    margin: 15px 0;
    padding: 10px;

    &:hover {
      transform: translateY(-5px);
      transition: all 0.2s;
    }
  }
`;

export const DeckItem = styled.a`
  text-decoration: none;
`;

export const Popularity = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 5px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 10px;
      padding: 0;
      img {
        width: 80px;
      }
    }
  }
`;
