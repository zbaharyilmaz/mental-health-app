import { FaTimesCircle } from "react-icons/fa";
import { useApp } from "../hooks/useApp";
const PatientList = () => {
  const { patients, deletePatient, setPatients } = useApp();
  return (
    <div>
      <div>
        {patients.map(({ id, patientName, day, isDone, myDoctor }) => {
          return (
            <div key={id} className="counselors">
              <div
                className={isDone === true ? "trueStyle" : "falseStyle"}
                onDoubleClick={() =>
                  setPatients(
                    patients.map((smb) =>
                      smb.id === id ? { ...smb, isDone: !smb.isDone } : smb
                    )
                  )
                }
              >
                {/* //!ÖNEMLİ: {...person, isDone: !smb.isDone} ...person veya ...smb ikisi de olur. */}
                {/* isDone? şeklinde de kullanabilirsin. */}

                <div>
                  <h2>
                    <b>Danışan:{patientName}</b>
                  </h2>
                  <h4>
                    <b>Tarih:</b>
                    <i>{day}</i>
                  </h4>
                  <h3>
                    <b>Psikolog:</b>
                    {myDoctor}
                  </h3>
                </div>
                <FaTimesCircle
                  className="fs-4"
                  onClick={() =>
                    setPatients(patients.filter((b) => b.id !== id))
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientList;
