import React, { useEffect, useState } from "react";
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(
    ()=> {

      if(contacts.length > 0 && contacts[0].name===name){
        alert('duplicate contact!');
        setDuplicate(true);
    }
}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate) {
      addContact(name, phone, email);
    } else {
      alert('Duplicate contact! Try again')
    }
    setName('');
    setPhone('');
    setEmail('');
    setDuplicate(false);
  };

  /*
  Using hooks, check for contact  in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          phone={phone} 
          email={email} 
          duplicate={duplicate} 
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          setDuplicate={setDuplicate}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts} />
      </section>
    </div>
  );
};
