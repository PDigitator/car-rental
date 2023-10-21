import Button from 'components/Button';
import { ReactComponent as IconBurger } from '../../icons/burger-menu.svg';

import { IconWrap } from 'components/HomeContent/HomeContent.styled';
import { HeaderWrap, HeaderContainer, Wrap, IconLogo } from './Header.styled';

const Header = ({ onOpen }) => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <Wrap>
          <Button name="burger" type="button" onClick={() => onOpen()}>
            <IconWrap>
              <IconBurger />
            </IconWrap>
          </Button>

          <IconWrap>
            <IconLogo />
          </IconWrap>
        </Wrap>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
