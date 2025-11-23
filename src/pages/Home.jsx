import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import Header from "../components/Header";
import Doctors from "../components/Doctors";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { appointment } = useAppContext();

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
      <h3 className="fs-2 fw-bold mt-5 text-center">Randevu Takvimi</h3>
      <PatientList />
    </div>
  );
};

export default Home;
