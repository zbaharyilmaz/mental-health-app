import { useState } from "react";
import uuid from "react-uuid";
import { useAppContext } from "../context/AppContext";

const AddPatient = () => {
  const { doctors, addPatient } = useAppContext();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && selectedDoctor && phone) {
      addPatient({
        id: uuid(),
        patientName: name,
        day: date,
        isDone: false,
        myDoctor: selectedDoctor,
      });
      alert(
        "Randevu işlemleriniz tamamlanmıştır. Randevu tarihi ve saati SMS olarak size iletilecektir. Sağlıklı günler dileriz."
      );
      // Form'u temizle
      setName("");
      setDate("");
      setSelectedDoctor("");
      setPhone("");
    } else {
      alert("Lütfen tüm bilgileri doldurduğunuzdan emin olun.");
    }
  };

  return (
    <div className="form-container text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Danışan Bilgileri</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
            placeholder="İsim-Soyisim"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="date">Tarih ve Saat</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            id="date"
            type="datetime-local"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="phone">Telefon Numarası</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            id="phone"
            type="tel"
            placeholder="***-***-**-**"
            pattern="[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}"
            required
          />
        </div>

        <div className="form-control">
          <label className="form-check" htmlFor="doctors">
            Psikologlarımız
          </label>
          <select
            onChange={(e) => setSelectedDoctor(e.target.value)}
            value={selectedDoctor}
            id="doctors"
            className="form-select"
            required
          >
            <option value="">Psikolog Seçiminizi Yapınız</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.doctorName}>
                {doctor.doctorName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button className="registerButton btn btn-dark btn-lg" type="submit">
            RANDEVU OLUŞTUR
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;