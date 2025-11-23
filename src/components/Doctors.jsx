import { useState } from "react";
import { doctorData, counseleeData } from "../helper/data";
import { useAppContext } from "../context/AppContext";

const Doctors = () => {
  const { doctors, appointment, doctorClick } = useAppContext();


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
