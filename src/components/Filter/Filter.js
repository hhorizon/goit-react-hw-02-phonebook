import propTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput type="text" name="filter" value={filter} onChange={onChangeFilter} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  onChangeFilter: propTypes.func,
};

export default Filter;

// ---styles---
const StyledLabel = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  display: block;
  font-size: 18px;
  border-color: rgba(0, 0, 0, 30%);
  outline: none;
`;
