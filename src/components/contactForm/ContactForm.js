import React from "react";
import PropTypes from "prop-types";

const ContactForm = ({ name, number, onHandleGetValue, onHandleSubmit }) => (
  <form onSubmit={onHandleSubmit}>
    <input
      value={name}
      onChange={onHandleGetValue}
      type="text"
      placeholder="Enter name..."
      name="name"
    />
    <input
      value={number}
      onChange={onHandleGetValue}
      type="text"
      placeholder="Enter number..."
      name="number"
    />
    <button type="submit">Add contact</button>
  </form>
);

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onHandleGetValue: PropTypes.func,
  onHandleSubmit: PropTypes.func
};

export default ContactForm;
