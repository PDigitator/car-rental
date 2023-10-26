import * as s from 'components/Section/Section.styled';

const Section = ({ page, title, children }) => {
  return (
    <>
      {page === 'home' ? (
        <s.SectionWrapHome>
          <s.ContainerHome>
            {title && <s.Title>{title}</s.Title>}
            {children}
          </s.ContainerHome>
        </s.SectionWrapHome>
      ) : (
        <s.SectionWrap>
          <s.Container>
            {title && <s.Title>{title}</s.Title>}
            {children}
          </s.Container>
        </s.SectionWrap>
      )}
    </>
  );
};

export default Section;
