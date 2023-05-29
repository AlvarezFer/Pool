import React from "react";
import { useState } from "react";
import "../Styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-title"> Contactanos</div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">Nombre: </label>
        <input
          className="contact-input"
          type="text"
          placeholder="Nombre.."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="contact-label">Apellido:</label>
        <input
          className="contact-input"
          type="text"
          placeholder="Apellido.."
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <label className="contact-label">Email: </label>
        <input
          className="contact-input"
          type="email"
          placeholder="Email.."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="contact-label">Mensaje: </label>
        <textarea
          className="contact-textarea"
          name="text"
          id=""
          cols="30"
          rows="4"
          placeholder="Mensaje.."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button className="contact-button" type="submit">
          Enviar
        </button>
      </form>{" "}
    </div>
  );
};

export default Contact;
