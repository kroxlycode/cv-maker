import React, { useState } from "react";
import "./Experiences.css";
import { useData } from "../DataContext";

const Experiences = () => {
  const { dispatch } = useData();

  const [experiences, setExperiences] = useState([
    {
      positionExp: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;

    const newExperiences = [...experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [name]: value,
    };

    setExperiences(newExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        positionExp: "",
        company: "",
        startDate: "",
        endDate: "",
        details: "",
      },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleSubmit = () => {
    dispatch({ type: "SET_EXPERIENCE_DATA", payload: experiences });
  };

  return (
    <div className="menu" id="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-wrench"></i>
          <h2> Deneyim</h2>
        </div>
        <div className="icons" id="icons"></div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {experiences.map((experience, index) => (
          <div key={index} className="experience-form Exp_form">
            <input
              type="text"
              name="positionExp"
              className="positionExp"
              placeholder="Pozisyon"
              value={experience.positionExp}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="company"
              className="company"
              placeholder="Şirket"
              value={experience.company}
              onChange={(e) => handleInputChange(index, e)}
            />
            <label>Başlangıç Tarihi</label>
            <input
              type="date"
              name="startDate"
              className="startDate"
              placeholder="Başlangıç Tarihi"
              value={experience.startDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <label>Bitiş Tarihi</label>
            <input
              type="date"
              name="endDate"
              className="endDate"
              placeholder="Bitiş Tarihi"
              value={experience.endDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="details"
              className="details"
              placeholder="Meslek"
              value={experience.details}
              onChange={(e) => handleInputChange(index, e)}
            />

            <div className="button-group">
              {experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index)}
                >
                  Kaldır
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>
          Yeni Ekle
        </button>
        <button type="submit" onClick={handleSubmit}>
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Experiences;
