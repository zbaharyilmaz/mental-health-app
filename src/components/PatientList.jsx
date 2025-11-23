import { FaTimesCircle } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const PatientList = () => {
  const { patients, deletePatient, togglePatientStatus } = useAppContext();

  return (
    <div>
      {patients.map(({ id, patientName, day, isDone, myDoctor }) => (
        <div key={id} className="counselors">
          <div
            className={isDone ? "trueStyle" : "falseStyle"}
            onDoubleClick={() => togglePatientStatus(id)}
          >
            <div>
              <h2>
                <b>Danışan: {patientName}</b>
              </h2>
              <h4>
                <b>Tarih: </b>
                <i>{day}</i>
              </h4>
              <h3>
                <b>Psikolog: </b>
                {myDoctor}
              </h3>
            </div>
            <FaTimesCircle
              className="fs-4"
              onClick={() => deletePatient(id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;