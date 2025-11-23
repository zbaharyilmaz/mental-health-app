import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import Header from "../components/Header";
import Doctors from "../components/Doctors";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { appointment, doctors } = useAppContext();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="dr-container d-flex">
        <div>
          <Doctors />
        </div>
        <div>{!appointment && <AddPatient />}</div>
      </div>
      <div className="section-header">
        <h2 className="section-title">Randevu Takvimi</h2>
        <p className="section-subtitle">
          {appointment
            ? "Bir doktor seçerek o doktora ait randevuları görüntüleyin"
            : doctors.length > 0
            ? `${doctors[0].doctorName} - Randevuları`
            : "Seçilen doktora ait randevular"}
        </p>
      </div>
      <PatientList />
    </div>
  );
};

export default Home;
