import styled from 'styled-components';
import { staticTheme } from 'theme';
import { ReactComponent as Logo } from '../../icons/logo-auto.svg';

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${staticTheme.colors.accent};
`;

const IconWrap = styled.span`
  display: flex;
  justify-content: center;
`;

const IconLogo = styled(Logo)`
  width: 108px;
  height: 108px;
`;

const Title = styled.p`
  font-size: 64px;
  font-weight: 600;
  line-height: calc(88 / 64);
  text-transform: capitalize;
`;

const Slogan = styled.p`
  padding-top: 18px;
  font-size: 36px;
  line-height: calc(40 / 36);
`;

const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${staticTheme.colors.txtTertiary};
`;

export { TopWrap, IconWrap, IconLogo, Title, Slogan, BottomWrap };
