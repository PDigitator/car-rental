import styled from 'styled-components';
import { staticTheme } from 'theme';

export const Thumb = styled.div`
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const Info = styled.div`
  flex-grow: 1;
  margin-bottom: 28px;
`;

export const ModelInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const Model = styled.span`
  color: ${staticTheme.colors.accent};
`;

export const Options = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const OptionsTxt = styled.li`
  padding-right: 6px;
  color: ${staticTheme.colors.txtSecondary};
  font-size: 12px;
  line-height: calc(18 / 12);

  &:not(:last-child) {
    border-right: 1px solid ${staticTheme.colors.lineDivider};
  }
`;
