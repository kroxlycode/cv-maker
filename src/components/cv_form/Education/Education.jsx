import React from "react";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";

const Education = () => {
  const { dispatch } = useData();
  const { register, handleSubmit } = useForm({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const onSubmit = (data) => {
    dispatch({ type: "SET_EDUCATION_DATA", payload: data });
  };

  return (
    <div className="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-graduation-cap"></i>
          <h2>Eğitim</h2>
        </div>
        <div className="icons" id="icons"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="school"
          className="school"
          id="school"
          placeholder="Okul"
          {...register("school")}
        />
        <input
          type="text"
          name="degree"
          className="degree"
          id="degree"
          placeholder="Derece"
          {...register("degree")}
        />
        <label> Başlangıç Tarihi</label>
        <input
          type="date"
          name="startDate"
          className="startDate"
          id="tartDate"
          {...register("startDate")}
        />
        <label> Bitiş Tarihi</label>
        <input
          type="date"
          name="endDate"
          className="endDate"
          id="endDate"
          {...register("endDate")}
        />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Education;
