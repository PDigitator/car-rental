import PropTypes from 'prop-types';

import { IconLogo } from 'components/Header/Header.styled';
import {
  IconWrap,
  StyledNavLink,
} from 'components/HomeContent/HomeContent.styled';
import { Nav, NavItem } from './SideBar.styled';

const SideBar = onClose => {
  return (
    <>
      <IconWrap>
        <IconLogo />
      </IconWrap>

      <Nav>
        <ul>
          <NavItem>
            <StyledNavLink to="/" onClick={onClose}>
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/catalog" onClick={onClose}>
              Catalog
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/favorites" onClick={onClose}>
              Favorites
            </StyledNavLink>
          </NavItem>
        </ul>
      </Nav>
    </>
  );
};

SideBar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SideBar;
