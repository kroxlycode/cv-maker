import React from "react";
import { useState } from "react";
import { useData } from "../DataContext";

const Contact = () => {
  const { dispatch } = useData();

  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USER_DATA", payload: formData });
  };

  return (
    <div className="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-address-book"></i>
          <h2>İletişim</h2>
        </div>
        <div className="icons" id="icons"></div>
      </div>

      <form>
        <input
          type="text"
          name="address"
          className="address"
          id="address"
          placeholder="Adres"
          value={formData.address}
          onChange={handleInputChange}
        />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            className="phone"
            placeholder="Telefon Numarası"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="url"
          name="link"
          className="link"
          id="link"
          placeholder="Portfolyo Link"
          value={formData.link}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Contact;
