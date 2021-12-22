import propTypes from 'prop-types';
import styled from 'styled-components';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ filteredList, onDelete }) => {
  return (
    <StyledList>
      {filteredList.map(el => {
        return (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
            onDelete={onDelete}
          />
        );
      })}
    </StyledList>
  );
};

ContactList.propTypes = {
  filteredList: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactList;

// ---styles---
const StyledList = styled.ul`
  margin-left: 40px;
`;
