import styled from 'styled-components';
import { staticTheme } from 'theme';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Thumb = styled.div`
  height: 248px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

const Info = styled.div`
  margin-bottom: 24px;
`;

const ModelInfo = styled.div`
  display: flex;

  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
`;

const Model = styled.span`
  color: ${staticTheme.colors.accent};
`;

const Options = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const OptionsTxt = styled.li`
  padding-right: 6px;
  color: ${staticTheme.colors.txtSecondary};
  font-size: 12px;
  line-height: calc(18 / 12);

  &:not(:last-child) {
    border-right: 1px solid ${staticTheme.colors.lineDivider};
  }
`;

const Description = styled.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: calc(20 / 14);
`;

const Title = styled.p`
  margin: 24px 0 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
`;

const Conditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ConditionsTxt = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  color: ${staticTheme.colors.txtAdditionalModal};
  background-color: ${staticTheme.colors.bgAdditionalModal};
  font-family: Montserrat;
  font-size: 12px;
  line-height: calc(18 / 12);
`;

const Span = styled.span`
  color: ${staticTheme.colors.accent};
  font-weight: 600;
  letter-spacing: -0.24px;
`;

const RentalLink = styled.a`
  display: block;
  max-width: 168px;

  padding: 12px 0;

  border-radius: 12px;

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
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export {
  Card,
  Thumb,
  Image,
  Info,
  ModelInfo,
  Model,
  Options,
  OptionsTxt,
  Description,
  Title,
  Conditions,
  ConditionsTxt,
  Span,
  RentalLink,
};
