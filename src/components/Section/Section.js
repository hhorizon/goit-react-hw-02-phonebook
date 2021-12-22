import propTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: propTypes.string,
};

export default Section;

// ---styles---
const StyledSection = styled.section`
  padding-left: 25px;
  padding-top: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const SectionTitle = styled.h2`
  letter-spacing: 0.03em;
  margin-bottom: 15px;
`;
