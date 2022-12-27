import { useState, useEffect } from "react";
import "./InfoPage.css";

const InfoPage = ({ infoPageHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const localName = window.localStorage.getItem('name');
    const localEmail = window.localStorage.getItem('email');
    const localPhone = window.localStorage.getItem('phone');
    
    if (localName) {
      setName(localName);
    }
    if (localEmail) {
      setEmail(localEmail);
    }
    if (localPhone) {
      setPhone(localPhone);
    }
  }, []);

  const formHandler = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPhoneError("");

    if (!name) {
      setNameError("This field is required");
    }
    if (!email) {
      setEmailError("This field is required");
    }
    if (!phone) {
      setPhoneError("This field is required");
    }

    if (name && email && phone) {
      setNameError("");
      setEmailError("");
      setPhoneError("");

      infoPageHandler({ name, email, phone });

      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div className="info-page">
      <h3>Personal info</h3>
      <p>please provide your name, email address, and phone number.</p>
      <form className="info-page__form" onSubmit={formHandler}>
        <div>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g Stephen King"
            onChange={({ target }) => setName(target.value)}
            value={name}
            style={{
              borderColor: nameError
                ? "hsl(354, 84%, 57%)"
                : "hsl(229, 24%, 87%)",
            }}
          />
          {nameError && <p className="info-page__form-error">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">email address</label>
          <input
            id="email"
            type="text"
            placeholder="e.g stephenking@lorem.com"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            style={{
              borderColor: emailError
                ? "hsl(354, 84%, 57%)"
                : "hsl(229, 24%, 87%)",
            }}
          />
          {emailError && <p className="info-page__form-error">{emailError}</p>}
        </div>
        <div>
          <label htmlFor="phone">phone number</label>
          <input
            id="phone"
            type="number"
            placeholder="e.g +1 234 567 890"
            onChange={({ target }) => setPhone(target.value)}
            value={phone}
            style={{
              borderColor: phoneError
                ? "hsl(354, 84%, 57%)"
                : "hsl(229, 24%, 87%)",
            }}
          />
          {phoneError && <p className="info-page__form-error">{phoneError}</p>}
        </div>
        <button type="submit">next step</button>
      </form>
    </div>
  );
};

export default InfoPage;
