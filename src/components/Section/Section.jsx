import PropTypes from 'prop-types';

import {
  SectionWrapper,
  SectionWrapperHome,
  Container,
  ContainerHome,
  Title,
} from 'components/Section/Section.styled';

const Section = ({ page, title, children }) => {
  return (
    <>
      {page === 'home' ? (
        <SectionWrapperHome>
          <ContainerHome>
            {title && <Title>{title}</Title>}
            {children}
          </ContainerHome>
        </SectionWrapperHome>
      ) : (
        <SectionWrapper>
          <Container>
            {title && <Title>{title}</Title>}
            {children}
          </Container>
        </SectionWrapper>
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
