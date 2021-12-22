import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  doFilteredList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase().trim()));
  };

  addContact = (e, newName, newNumber) => {
    e.preventDefault();

    let contactsNames = [];

    for (const contact of this.state.contacts) {
      contactsNames.push(contact.name);
    }
    if (contactsNames.includes(newName)) {
      alert(`${newName} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(5), name: newName, number: newNumber };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter filter={this.state.filter} onChangeFilter={this.handleFilter} />
          <ContactList filteredList={this.doFilteredList()} onDelete={this.deleteContact} />
        </Section>
      </Container>
    );
  }
}

export default App;

// ---styles---
const Container = styled.div`
  margin-left: 100px;
`;
