import { useState } from "react";
import { doctorData, counseleeData } from "../helper/data";

export const useApp = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(counseleeData);
  const [appointment, setAppointment] = useState(true);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value; // ! CLOSURE PROBLEMİNDEN ÖTÜRÜ, SEARCH HEMEN GÜNCELLENMEDİĞİ İÇİN; ONU SEARCHVALUE İLE BİR DEĞİŞKENE ATIYORUZ.
    //*  Closure problemi: State güncellemesi asenkron olduğu için aynı fonksiyon içinde eski değeri görürsünüz. Çözüm: Event'ten gelen güncel değeri (e.target.value) bir değişkene alıp onu kullanın

    setSearch(searchValue);

    // Boş arama ise tüm doktorları göster
    if (searchValue === "") {
      setDoctors(doctorData);
    } else {
      // DÜZELTME: doctorData kullan, doctors değil (doctors zaten filtrelenmiş olabilir)
      const filteredDoctors = doctorData.filter((item) =>
        item.doctorName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDoctors(filteredDoctors);
    }
  };
  // Doktora tıklanması durumunda yapılacak işlem
  const doctorClick = (id) => {
    const selectedDoctor = doctors.find((d) => d.id === id);
    if (selectedDoctor) {
      setDoctors([selectedDoctor]);
      setAppointment(false);
      setPatients(
        patients.filter((a) => a.myDoctor === selectedDoctor.doctorName)
      );
    }
  };

  // Ana sayfaya dön - ekleme
  const resetHome = () => {
    setDoctors(doctorData);
    setPatients(counseleeData);
    setAppointment(true);
    setSearch("");
  };

  // Hasta silme - DÜZELTME: setPatients kullan
  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  // Hasta ekleme
  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  // Hasta durumunu değiştir (isDone toggle)
  const togglePatientStatus = (id) => {
    setPatients(
      patients.map((p) => (p.id === id ? { ...p, isDone: !p.isDone } : p))
    );
  };

  return {
    // STATE
    doctors,
    patients,
    appointment,
    search,

    // SETTER
    setDoctors,
    setPatients,
    setAppointment,
    setSearch,

    // ACTIONS
    doctorClick,
    deletePatient,
    addPatient,
    togglePatientStatus,
    handleSearch,
    resetHome,
  };
};
