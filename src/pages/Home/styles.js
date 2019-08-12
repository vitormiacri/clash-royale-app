import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 700px;
  min-height: 700px;
`;

export const MenuList = styled.div`
  width: 90%;
  max-width: 600px;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      margin: 20px 0;
      background: #357187;
      padding: 15px 50px;
      border-radius: 5px;
      border: 1px solid #0e67c2;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #052746;
        margin-right: 20px;
      }
    }
  }
`;

export const LinkMenu = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    border-bottom: 1px solid #fff;
  }
`;
