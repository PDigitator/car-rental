import * as s from './HomeContent.styled';

const HomeContent = () => {
  return (
    <>
      <s.TopWrap>
        <s.IconWrap>
          <s.IconLogo />
        </s.IconWrap>
        <s.Title>easy car rental</s.Title>
        <s.Slogan>...much easier than you thought!</s.Slogan>
      </s.TopWrap>

      <s.StyledNavLink to="/catalog">Let's Go!</s.StyledNavLink>

      <s.List>
        <s.Item>
          <s.Thumb>
            <s.IconOrder />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Registration online</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconCredit />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Сashless payment</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconTime />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Punctuality</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconApproved />
          </s.Thumb>
          <s.Info>
            <s.InfoText>Additional insurance</s.InfoText>
          </s.Info>
        </s.Item>
        <s.Item>
          <s.Thumb>
            <s.IconSupport />
          </s.Thumb>
          <s.Info>
            <s.InfoText>24/7 support</s.InfoText>
          </s.Info>
        </s.Item>
      </s.List>
    </>
  );
};

export default HomeContent;
