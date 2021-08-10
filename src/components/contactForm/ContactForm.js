import React from "react";

const ContactForm = (props) => {
  function handleName(e) {
    props.setName(e.target.value);
  }
  function handlePhone(e) {
    const validPhone = /^\d{1,10}$/;
    const isValid = validPhone.test(e.target.value);
    if(isValid) {
      props.setPhone(e.target.value);
    }
  }
  function handleEmail(e) {
    props.setEmail(e.target.value);
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={props.name} onChange={handleName} />
      <input type="tel" name="phone" placeholder="Phone" value={props.phone} onChange={handlePhone} />
      <input type="email" name="email" placeholder="Email" value={props.email} onChange={handleEmail} />
      <input type="submit" value="Add a contact" />
    </form>
  );
};

export default ContactForm;