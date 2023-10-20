import {
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
} from './HomeContent.styled';

const HomeContent = () => {
  return (
    <>
      <TopWrap>
        <IconWrap>
          <IconLogo />
        </IconWrap>
        <Title>easy car rental</Title>
        <Slogan>...much easier than you thought!</Slogan>
      </TopWrap>

      <StyledNavLink to="/catalog">Let's Go!</StyledNavLink>

      <BottomWrap>
        <List>
          <Item>
            <Thumb>
              <IconOrder />
            </Thumb>
            <Info>
              <InfoText>Registration online</InfoText>
            </Info>
          </Item>
          <Item>
            <Thumb>
              <IconCredit />
            </Thumb>
            <Info>
              <InfoText>Сashless payment</InfoText>
            </Info>
          </Item>
          <Item>
            <Thumb>
              <IconTime />
            </Thumb>
            <Info>
              <InfoText>Punctuality</InfoText>
            </Info>
          </Item>
          <Item>
            <Thumb>
              <IconApproved />
            </Thumb>
            <Info>
              <InfoText>Additional insurance</InfoText>
            </Info>
          </Item>
          <Item>
            <Thumb>
              <IconSupport />
            </Thumb>
            <Info>
              <InfoText>24/7 support</InfoText>
            </Info>
          </Item>
        </List>
      </BottomWrap>
    </>
  );
};

export default HomeContent;
