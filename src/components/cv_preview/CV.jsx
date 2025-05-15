import React, { useRef } from "react";
import "./CV.css";
import { useData } from "../cv_form/DataContext";
import defaultImage from "../../assets/defaultUser.png";
import html2pdf from "html2pdf.js";
import { useEffect } from "react";

const CV = () => {
  const { state, dispatch } = useData();
  const {
    userData,
    personalData,
    experienceData,
    skillData,
    educationData,
    downloadPDF,
  } = state;

  const imageUrl = personalData.imageUrl || defaultImage;

  const cvRef = useRef();

  useEffect(() => {
    if (downloadPDF) {
      handleDownloadPDF();

      dispatch({ type: "DOWNLOAD_PDF", payload: false });
    }
  }, [downloadPDF, dispatch]);

  const handleDownloadPDF = () => {
    const content = cvRef.current;

    const pdfOptions = {
      margin: 10,
      filename: "CVkroxly.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions);

    dispatch({ type: "DOWNLOAD_PDF", payload: true });
  };

  return (
    <div className="cv_container" ref={cvRef}>
      <div className="header">
        <div className="picture_div">
          <img src={imageUrl} alt="" className="picture" />
        </div>
        <div className="right">
          <h1 className="user_name">
            {`${personalData.firstName} ${personalData.lastName}`}
          </h1>
          <span className="post"> {`${personalData.profileTitle}`} </span>
          <div className="contact_infos">
            <span className="email">
              {" "}
              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
              {`${userData.email}`}{" "}
            </span>
            <span className="address">
              <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
              {`${userData.address}`}
            </span>
            <span className="phone">
              <i className="fa fa-phone" aria-hidden="true"></i>{" "}
              {`${userData.phone}`}{" "}
            </span>
            <span className="link">
              <i className="fa fa-link" aria-hidden="true"></i>{" "}
              {`${userData.link}`}{" "}
            </span>
          </div>
        </div>
      </div>
      <main className="cv_main">
        <div className="left_cv_main">
          <div className="profil">
            <h2>Hakkımda</h2>
            <p className="desc"> {`${personalData.description}`} </p>
          </div>
          <div className="formation">
            <h2>Formasyon</h2>
            {educationData && (
              <>
                <h4> {educationData.degree} </h4>
                <div>
                  <span className=""> {educationData.school} </span>
                  <p className="date">
                    {`${educationData.startDate}'den ${educationData.endDate}'e`}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="experience">
            <h2>Deneyim</h2>
            {Array.isArray(experienceData) && experienceData.length > 0 ? (
              experienceData.map((experience, index) => (
                <div key={index}>
                  <h4>{experience.positionExp}</h4>
                  <div>
                    <span className="company_name">{experience.company}</span>
                    <p className="date">
                      {`${experience.startDate}'den ${experience.endDate}'e`}
                    </p>
                  </div>
                  <p>{experience.details}</p>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="right_cv_main">
          <div className="hr"></div>
          <div className="right_cv_main_container">
            <div>
              <h2>Kişisel Bilgi</h2>
              <>
                <span>Uyruk</span>
                <p> {personalData.nationality} </p>
              </>
              <>
                <span>Cinsiyet</span>
                <p> {personalData.sexe} </p>
              </>
              <>
                <span>Dil</span>
                {personalData.language && (
                  <ul>
                    <li> {personalData.language} </li>
                  </ul>
                )}
              </>
            </div>
            <div>
              <h2>Özellikler</h2>
              {Array.isArray(skillData.skills) &&
                skillData.skills.length > 0 ? (
                <ul>
                  {skillData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <p>Özellik yok</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;
