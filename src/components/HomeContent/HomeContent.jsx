import {
  TopWrap,
  IconWrap,
  IconLogo,
  Title,
  Slogan,
  BottomWrap,
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
      <BottomWrap>
        <ul>
          <li>
            <div></div>
          </li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ul>
        <button>Let's Go!</button>
      </BottomWrap>
    </>
  );
};

export default HomeContent;
