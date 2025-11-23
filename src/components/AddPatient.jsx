import { useState } from "react";
import uuid from "react-uuid";
import { useApp } from "../hooks/useApp";
const AddPatient = () => {
  const { patients, addPatients, setPatients } = useApp();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && selectedDoctor && phone) {
      setPatients([
        ...patients,
        {
          id: uuid(),
          patientName: name,
          day: date,
          isDone: false,
          myDoctor: selectedDoctor,
        },
      ]);
      alert(
        "Randevu işlemleriniz tamamlanmıştır. Randevu tarihi ve saati SMS olarak size iletilecektir.Sağlıklı günler dileriz."
      );
    } else {
      alert("Lütfen tüm bilgileri doldurduğunuzdan emin olun.");
    }
  };
  return (
    <div className="form-container text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Danışan Bilgileri</label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="İsim-Soyisim"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="">Tarih ve Saat</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            id="date"
            type="datetime-local"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Telefon Numarası</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="tel"
            placeholder="***-***-**-**"
            pattern="[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}"
            required
          />
          {/* Eğer telefon numarasının hem boşluk hem de tire içermesine izin vermek istiyorsanız, pattern regex ifadesini şöyle değiştirebilirsiniz */}
        </div>
        <div className="form-control">
          <label className="form-check" htmlFor="doctors">
            Psikologlarımız
          </label>
          <select
            onChange={(e) => setSelectedDoctor(e.target.value)}
            id="doctors"
            className="form-select"
            value={selectedDoctor}
            required
          >
            {/* //! AddPatient bileşeninde select input'unda value={doctors} kullanma. Bu, bir array (dizi) olduğu için uyumsuzluk yaratabilir. Bunun yerine seçili olan doktorun kimliğini veya adını selectedDoctor gibi bir state ile bağla. */}

            <option>Psikolog Seçiminizi Yapınız</option>
            <option value="1">Prof. Aysa Dizdar</option>
            <option value="2">Psk. Alina Berrin Akın</option>
            <option value="3">Psk. Sena Adil</option>
            <option value="4">Psk. Neva Yılmaz</option>
            <option value="5">Asst. Prof. Emir Akın</option>
            <option value="6">Psk. Müge Sezen</option>
            <option value="7">Psk. Ayhan Kemer</option>
          </select>

          {/*  //!KISACA: 
            // <option value="">Psikolog Seçiminizi Yapınız</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option> */}
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
