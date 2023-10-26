import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-column-gap: 29px;
  grid-row-gap: 50px;

  padding: 0;
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
`;
