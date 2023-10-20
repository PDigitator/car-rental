import styled from 'styled-components';
import { staticTheme } from 'theme';

const Btn = styled.button`
  padding: 0;

  border: none;
  border-radius: 12px;
  cursor: pointer;

  font-family: inherit;
  background-color: transparent;
`;

const BtnLoad = styled(Btn)`
  /* display: block; */ //!
  margin: 100px auto 0;
  padding: 10px;

  color: ${staticTheme.colors.accent};

  text-align: center;
  font-size: 16px;
  line-height: calc(24 / 16);
  font-weight: 500;
  text-decoration-line: underline;

  transition: all 250ms ${staticTheme.timingFunction.cubicBezier};

  &:hover,
  &:focus {
    color: ${staticTheme.colors.accentHover};
  }
`;

const BtnLearn = styled(Btn)`
  /* display: block; */ //!
  max-width: 274px;
  margin: 0 auto;
  padding: 12px 0;

  background-color: ${staticTheme.colors.accent};
  color: ${staticTheme.colors.txtTertiary};

  text-align: center;
  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 600;

  transition: all 250ms ${staticTheme.timingFunction.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${staticTheme.colors.accentHover};
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

const BtnSearch = styled(BtnLearn)`
  max-width: 136px;
  margin: 0 auto;
  padding: 14px 0;
`;

export { Btn, BtnLearn, BtnLoad, BtnSearch };
