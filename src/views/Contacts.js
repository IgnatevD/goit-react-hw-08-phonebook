/** @format */

import Filter from "../components/Filter/Filter";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import s from "./Contacts.module.css";

export default function Contacts() {
  return (
    <>
      <section className={s.section}>
        <div className={s.divConteiner}>
          <h1>Телефонная книга</h1>
          <ContactForm />
        </div>
      </section>
      <section className={s.section}>
        <div className={s.divContactList}>
          <h2>Контакты</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </>
  );
}
