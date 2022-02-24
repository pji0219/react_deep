import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Lists = styled.div`
  width: 100%;
  height: auto;
`;

const ListItem = styled(Link)`
  cursor: pointer;
  width: 300px;
  height: 300px;
  text-align: center;
  text-decoration: none;
  &:visited {
    color: #000;
  }
`;

function List() {
  return (
    <Lists>
      <ListItem to="/1">이동</ListItem>
    </Lists>
  );
}

export default List;
