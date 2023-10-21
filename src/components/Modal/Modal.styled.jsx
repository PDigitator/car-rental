import styled from 'styled-components';
import { staticTheme } from 'theme';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${staticTheme.colors.txtSecondary};
`;

const ModalWrap = styled.div`
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */

  width: 335px;
  min-height: 155px;
  padding: 20px;

  border-radius: 24px;
  background-color: ${staticTheme.colors.txtTertiary};
`;

export { Overlay, ModalWrap };
