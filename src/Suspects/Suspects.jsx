import React, { useState } from 'react';
import Modal from 'react-modal';
import './Suspects.css';
import { contacts } from "./const";


const Suspects = () => {
  const [flipped, setFlipped] = useState(Array(100).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFlip = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === contacts[currentIndex].password) {
      setFlipped(flipped.map((flip, i) => (i === currentIndex ? !flip : flip)));
      setIsModalOpen(false);
      setPasswordInput('');
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password!');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPasswordInput('');
    setErrorMessage('');
  };

  return (
   <div className="container">
     <h1 className="title">Suspects and Witnesses</h1>
     <div className="contacts-list">
       {contacts.map((contact, index) => (
        <div
         className={`contact-card ${flipped[index] ? 'flipped' : ''}`}
         key={index}
         onClick={() => handleFlip(index)}
        >
          <div className="contact-card-front">
            <h3>{contact.name}</h3>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>City:</strong> {contact.city}</p>
            <p><strong>Сompany:</strong> {contact.company}</p>
            <p><strong>Signal:</strong> {contact.company}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Info:</strong> {contact.info}</p>
          </div>
          <div className="contact-card-back">
            <p className="contact-card-back-text">{contact.testimony}</p>
          </div>
        </div>
       ))}
     </div>

     <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Password Modal"
      className="modal"
      overlayClassName="modal-overlay"
     >
       <h2>Enter the password for access (matches the password received in the task)</h2>
       <input
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Enter password"
       />
       {errorMessage && <p className="error-message">{errorMessage}</p>}
       <button onClick={handlePasswordSubmit}>Confirm</button>
       <button onClick={closeModal}>Cancel</button>
     </Modal>
   </div>
);
};

export default Suspects;