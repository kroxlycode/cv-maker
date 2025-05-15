import React from "react";
import "./formHeader.css";
import { useData } from "../DataContext";
import defaultUser from "../../../DefaultUser";

const FormHeader = () => {
  const { dispatch } = useData();

  const handleDownloadPDF = () => {
    dispatch({ type: "DOWNLOAD_PDF", payload: true });
  };

  const handleAutofill = () => {
    dispatch({ type: "SET_USER_DATA", payload: defaultUser.userData });
    dispatch({ type: "SET_PERSONAL_DATA", payload: defaultUser.personalData });
    dispatch({
      type: "SET_EXPERIENCE_DATA",
      payload: defaultUser.experienceData,
    });
    dispatch({ type: "SET_SKILL_DATA", payload: defaultUser.skillData });
    dispatch({
      type: "SET_EDUCATION_DATA",
      payload: defaultUser.educationData,
    });
  };

  return (
    <div className="formHeader">
      <div>
        <h2 className="title">Kroxly - CV Maker</h2>
        <div className="buttons">
          <button
            className="button_save button"
            id="button_save"
            onClick={handleDownloadPDF}
          >
            <i className="fa-solid fa-download"></i>
            Kaydet
          </button>
          <button
            className="button_autofill button"
            id="button_autofill"
            onClick={handleAutofill}
          >
            <i className="fa-solid fa-pen"></i>
            Doldur
          </button>
        </div>
      </div>
      <p>
        Developed By
        <span>
          <a
            href="https://github.com/kroxlycode"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
            <span className="name">kroxlycode</span>
          </a>
        </span>
      </p>
    </div>
  );
};

export default FormHeader;
