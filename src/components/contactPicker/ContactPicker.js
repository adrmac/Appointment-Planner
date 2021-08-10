import React from "react";

const ContactPicker = (props) => {
  const contactList = props.contactList;
  const options = contactList.map((item,i)=>
    <option key={i+1} value={item.name}>{item.name}</option>
    )
    return (
      <>
    <label for="contacts"></label>
    <select name="contacts" value={props.value} onChange={props.onChange}>
      <option key="0" value="" selected="selected">No contact selected</option>
      {options}
    </select>
    </>
  );
};

export default ContactPicker;