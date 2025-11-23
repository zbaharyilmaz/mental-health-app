import { useState } from "react";
import { doctorData, counseleeData } from "../helper/data";
import { useApp } from "../hooks/useApp";

const Doctors = () => {
  const { doctors, appointment, doctorClick } = useApp();


  return (
    <div className="dr">
      {/*className={appointment ? "dr" : "dr-row"}  */}
      {doctors.map(({ id, doctorImg, doctorName }) => {
        return (
          <div key={id}>
            <img
              src={doctorImg}
              width="300px"
              height="300px"
              alt="doctor"
              className={
                appointment ? "doctor-img-normal" : "doctor-img-active"
              }
              onClick={() => doctorClick(id)} // Tıklandığında doktoru filtrele ve appointment'ı değiştir
            />
            <h4 className="mt-3">{doctorName}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Doctors;
