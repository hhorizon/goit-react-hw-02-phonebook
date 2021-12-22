import { Component } from 'react';
import styled from 'styled-components';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    return (
      <StyledForm
        onSubmit={e => {
          onSubmit(e, name, number);
          this.reset();
        }}
      >
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChangeName}
          />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChangeNumber}
          />
        </StyledLabel>

        <StyledBtn type="submit">Add contacts</StyledBtn>
      </StyledForm>
    );
  }
}

export default ContactForm;

// ---styles---
const StyledForm = styled.form`
  width: 400px;
  padding: 7px;
  border: 2px solid #000;
  /* display: flex;
  flex-direction: column; */
`;

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

const StyledBtn = styled.button`
  display: block;
  /* width: 150px; */
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
