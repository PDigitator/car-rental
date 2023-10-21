import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { staticTheme } from 'theme';
import { ReactComponent as Logo } from '../../icons/logo-auto.svg';
import { ReactComponent as Order } from '../../icons/online-order.svg';
import { ReactComponent as Credit } from '../../icons/credit.svg';
import { ReactComponent as Time } from '../../icons/clock.svg';
import { ReactComponent as Approved } from '../../icons/approved.svg';
import { ReactComponent as Support } from '../../icons/support.svg';

const TopWrap = styled.div`
  margin-bottom: 50px;
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

const StyledNavLink = styled(NavLink)`
  display: block;
  max-width: 274px;
  margin: 0 auto;
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
  &:focus,
  &.active {
    background-color: ${staticTheme.colors.accentHover};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

const BottomWrap = styled.div`
  margin-top: 350px;

  color: ${staticTheme.colors.txtTertiary};
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: solid 2px ${staticTheme.colors.txtTertiary};
`;

const Thumb = styled.div`
  padding: 20px 20px 0;

  display: flex;
  justify-content: center;
`;

const IconOrder = styled(Order)`
  width: 108px;
  height: 108px;
`;

const IconCredit = styled(Credit)`
  width: 108px;
  height: 108px;
`;

const IconTime = styled(Time)`
  width: 108px;
  height: 108px;
`;

const IconApproved = styled(Approved)`
  width: 108px;
  height: 108px;
`;

const IconSupport = styled(Support)`
  width: 108px;
  height: 108px;
`;

const Info = styled.div`
  padding: 20px;
`;
const InfoText = styled.p`
  font-size: 24px;

  line-height: calc(28 / 24);
  text-align: center;
`;

export {
  TopWrap,
  IconWrap,
  IconLogo,
  Title,
  Slogan,
  StyledNavLink,
  BottomWrap,
  List,
  Item,
  Thumb,
  IconOrder,
  IconCredit,
  IconTime,
  IconApproved,
  IconSupport,
  Info,
  InfoText,
};
