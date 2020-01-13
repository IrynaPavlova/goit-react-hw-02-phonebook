import React, { Component } from "react";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

const randomId = require("uuid/v4");

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    name: "",
    number: ""
  };

  onHandleGetValue = e => {
    const { name, value } = e.target;
    this.setState({ id: randomId(), [name]: value });
  };

  getContact = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (
      e.target.name.value.length === 0 ||
      e.target.number.value.length === 0
    ) {
      return;
    }

    let unique = true;

    this.state.contacts.forEach(contact => {
      if (contact.name === e.target.name.value) {
        unique = false;
        alert(`${e.target.name.value} is already in contacts.`);
      }
    });

    if (unique === true) {
      this.getContact({
        name: this.state.name,
        number: this.state.number,
        id: randomId()
      });
    }

    this.setState({ name: "", number: "" });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  onHandleDelete = e => {
    const id = e.target.closest("li").id;
    this.deleteContact(id);
  };

  onHandleSearch = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filter = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            onHandleGetValue={this.onHandleGetValue}
            onHandleSubmit={this.onHandleSubmit}
          />
          <h2>Contacts</h2>

          <Filter onHandleSearch={this.onHandleSearch} />
          <ContactList
            filter={filter}
            contacts={this.state.contacts}
            onHandleDelete={this.onHandleDelete}
          />
        </div>
      </>
    );
  }
}
