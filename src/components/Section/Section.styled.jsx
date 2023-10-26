import styled from 'styled-components';
import BgImage from '../../images/bg-image.png';
import { staticTheme } from 'theme';

export const SectionWrap = styled.section`
  margin: 0 auto;
  background-color: ${staticTheme.colors.accent};
`;

export const SectionWrapHome = styled(SectionWrap)`
  height: 100vh;
  margin: 0 auto;
  background: radial-gradient(
    at top left,
    ${staticTheme.colors.bgInput} 0%,
    ${staticTheme.colors.accent} 110%
  );
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 50px 128px 150px;
  margin: 0 auto;
  background-color: ${staticTheme.colors.txtTertiary};
`;

export const ContainerHome = styled(Container)`
  padding: 60px 128px;
  background-color: transparent;
  height: 900px;

  background-image: url(${BgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;

  animation: scale 1s ${staticTheme.timingFunction.cubicBezier};

  @keyframes scale {
    0% {
      background-size: 25%;
    }
    100% {
      background-size: 100%;
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
