import Button from 'components/Button';
import { ReactComponent as IconBurger } from '../../icons/burger-menu.svg';

import { IconWrap } from 'components/HomeContent/HomeContent.styled';
import * as s from './Header.styled';

const Header = ({ onOpen }) => {
  return (
    <s.HeaderWrap>
      <s.HeaderContainer>
        <s.Wrap>
          <Button name="burger" type="button" onClick={() => onOpen()}>
            <IconWrap>
              <IconBurger />
            </IconWrap>
          </Button>

          <IconWrap>
            <s.IconLogo />
          </IconWrap>
        </s.Wrap>
      </s.HeaderContainer>
    </s.HeaderWrap>
  );
};

export default Header;
