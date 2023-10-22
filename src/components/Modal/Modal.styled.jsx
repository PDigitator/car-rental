import styled from 'styled-components';
import { staticTheme } from 'theme';

const OverlaySideBar = styled.div`
  position: fixed;
  z-index: 9999;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${staticTheme.colors.txtSecondary};
`;

const Overlay = styled(OverlaySideBar)`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  position: absolute;

  max-width: 541px;
  padding: 40px;

  border-radius: 24px;
  background-color: ${staticTheme.colors.txtTertiary};
`;

const ModalWrapSideBar = styled.div`
  position: absolute;

  min-width: 400px;
  height: 100vh;
  padding: 60px 40px;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${staticTheme.colors.txtTertiary};

  left: 0;

  animation: slidein 250ms ${staticTheme.timingFunction.cubicBezier};

  @keyframes slidein {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }
`;

export { Overlay, OverlaySideBar, ModalWrap, ModalWrapSideBar };
