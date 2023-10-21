import styled from 'styled-components';
import { staticTheme } from 'theme';

const OverlaySideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${staticTheme.colors.accent};
`;

const Overlay = styled(OverlaySideBar)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */

  width: 335px;
  min-height: 155px;
  padding: 40px;

  border-radius: 24px;
  background-color: ${staticTheme.colors.txtTertiary};
`;

const ModalWrapSideBar = styled.div`
  position: absolute;

  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */

  width: 335px;
  min-height: 155px;
  padding: 40px;

  border-radius: 24px;
  background-color: ${staticTheme.colors.txtTertiary};

  /* left: 0; */

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #dce3e5cc;
  border-radius: 24px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  z-index: 1000;
  transition: transform 1250ms ease-in-out;

  /* animation: slidein 250ms ${staticTheme.timingFunction.cubicBezier};

  @keyframes slidein {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  } */
`;

export { Overlay, OverlaySideBar, ModalWrap, ModalWrapSideBar };
