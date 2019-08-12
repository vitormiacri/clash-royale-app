import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  ul {
    list-style: none;

    li {
      a {
        background: #0e67c2;
        border-radius: 4px;
        font-size: 1.2rem;
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;

        &:visited {
          color: #fff;
        }
      }
    }
  }
`;
