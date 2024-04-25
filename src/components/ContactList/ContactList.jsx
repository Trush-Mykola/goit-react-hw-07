import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectContacts, selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilteredContacts);

  return <ul>{contacts && filterContacts.map((contact) => <Contact key={contact.id} contact={contact} />)}</ul>;
};

export default ContactList;
