import PropTypes from 'prop-types';

import {
  SectionWrap,
  SectionWrapHome,
  Container,
  ContainerHome,
  Title,
} from 'components/Section/Section.styled';

const Section = ({ page, title, children }) => {
  return (
    <>
      {page === 'home' ? (
        <SectionWrapHome>
          <ContainerHome>
            {title && <Title>{title}</Title>}
            {children}
          </ContainerHome>
        </SectionWrapHome>
      ) : (
        <SectionWrap>
          <Container>
            {title && <Title>{title}</Title>}
            {children}
          </Container>
        </SectionWrap>
      )}
    </>
  );
};

Section.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
