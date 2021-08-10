import React, {useState,useEffect} from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const AppointmentForm = (props) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");

      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {props.setTitle(e.target.value)};
  const handleDate = (e) => {props.setDate(e.target.value)};
  const handleTime = (e) => {props.setTime(e.target.value)};
  const handleContactPicker = (e) => {props.setContact(e.target.value)};

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="title" value={props.title} onChange={handleTitle} />
      <input type="date" name="date" min={getTodayString()} onChange={handleDate} value={props.date} />
      <input type="time" name="time" onChange={handleTime} value={props.time} />
      <ContactPicker contactList={props.contactList}
      onChange={handleContactPicker} value={props.contact} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};

export default AppointmentForm;