import React from "react";
import { doctorData, counseleeData } from "../helper/data";
import { useState } from "react";

export const useApp = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(counseleeData);
  const [appointment, setAppointment] = useState(true);

    // Doktora tıklanması durumunda yapılacak işlem
    const doctorClick = (id) => {
        // Burada doktoru buluyoruz (doktorun id'si ile)
        const selectedDoctor = doctors.find((d) => d.id === id);
    
        // Doktoru filtreliyoruz
        setDoctors([selectedDoctor]);
    
        // appointment durumunu false yapıyoruz
        setAppointment(false);
    
        // Seçilen doktora bağlı olarak hastaları filtreliyoruz
        // sadece tıklanan doktora ait hastaları filtreliyoruz
        setPatients(
          patients.filter((a) => a.myDoctor === selectedDoctor.doctorName)
        );
      };
  const deletePatient=(id)=>{
    patients.filter((p)=>p.id!==id)
  }
  const addPatients=(newPatient)=>{
    setPatients([...patients, newPatient])
  }
  return {
    //! STATE DEĞİŞKENLERİ
    doctors,
    patients,
    appointment,
    //! SETTER
    setDoctors,
    setPatients,
    setAppointment,
    //! ACTIONS
    deletePatient,
    addPatients,
    doctorClick,
  };
};
