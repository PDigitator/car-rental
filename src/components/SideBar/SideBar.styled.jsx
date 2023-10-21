import styled from 'styled-components';

const Nav = styled.nav`
  margin-top: 50px;
`;
const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export { Nav, NavItem };
