import propTypes from 'prop-types';
import styled from 'styled-components';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <StyledItem>
      <StyledText>
        {name}: {number}
      </StyledText>
      <StyledBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </StyledBtn>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  number: propTypes.string,
  onDelete: propTypes.func,
};

export default ContactItem;

// ---styles---
const StyledItem = styled.li`
  margin-bottom: 10px;
`;

const StyledText = styled.p`
  display: inline;
  margin-right: 15px;
`;

const StyledBtn = styled.button`
  background-color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 30%);
  font-weight: 600;
  font-size: 14px;

  &:active {
    background-color: #035bad;
  }
`;
