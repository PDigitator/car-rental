import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { staticTheme } from 'theme';

export const HeaderWrap = styled.header`
  position: sticky;
  z-index: 999;
  top: 0;
  margin: 0 auto;
  background-color: ${staticTheme.colors.accent};
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  padding: 60px 128px 0;
  margin: 0 auto;
  background-color: ${staticTheme.colors.txtTertiary};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const IconLogo = styled(Logo)`
  width: 193px;
  height: 40px;
  fill: ${staticTheme.colors.accent};
`;
