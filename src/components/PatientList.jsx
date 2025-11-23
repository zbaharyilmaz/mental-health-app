import {
  FaTimesCircle,
  FaCheckCircle,
  FaClock,
  FaUserMd,
  FaCalendarAlt,
} from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const PatientList = () => {
  const { patients, deletePatient, togglePatientStatus } = useAppContext();

  // Tarih formatını düzenle
  const formatDate = (dateString) => {
    if (!dateString) return dateString;
    // "Dec 12th at 2:30pm" formatını daha güzel göster
    return dateString;
  };

  // Randevu yoksa
  if (patients.length === 0) {
    return (
      <div className="empty-appointments">
        <div className="empty-state">
          <FaCalendarAlt className="empty-icon" />
          <h3>Bu doktora ait randevu bulunmuyor</h3>
          <p>Seçilen doktora ait henüz randevu kaydı bulunmamaktadır</p>
        </div>
      </div>
    );
  }

  return (
    <div className="appointments-container">
      <div className="appointment-info-banner">
        <div className="info-banner-content">
          <FaClock className="info-banner-icon" />
          <div>
            <strong>Kullanım İpuçları:</strong>
            <ul>
              <li>
                Randevu durumunu değiştirmek için <strong>çift tıklayın</strong>
              </li>
              <li>
                Randevuyu silmek için sağ üstteki <strong>çarpı (×)</strong>{" "}
                butonuna tıklayın
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="appointments-grid">
        {patients.map(({ id, patientName, day, isDone, myDoctor }) => (
          <div
            key={id}
            className={`appointment-card ${isDone ? "completed" : "pending"}`}
            onDoubleClick={() => togglePatientStatus(id)}
          >
            <div className="card-header">
              <div className="status-badge">
                {isDone ? (
                  <>
                    <FaCheckCircle className="status-icon completed-icon" />
                    <span>Tamamlandı</span>
                  </>
                ) : (
                  <>
                    <FaClock className="status-icon pending-icon" />
                    <span>Beklemede</span>
                  </>
                )}
              </div>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deletePatient(id);
                }}
                title="Randevuyu Sil"
              >
                <FaTimesCircle />
              </button>
            </div>

            <div className="card-body">
              <div className="patient-info">
                <div className="info-item">
                  <FaUserMd className="info-icon" />
                  <div>
                    <span className="label">Danışan</span>
                    <span className="value">{patientName}</span>
                  </div>
                </div>

                <div className="info-item">
                  <FaCalendarAlt className="info-icon" />
                  <div>
                    <span className="label">Tarih & Saat</span>
                    <span className="value">{formatDate(day)}</span>
                  </div>
                </div>

                <div className="info-item">
                  <FaUserMd className="info-icon" />
                  <div>
                    <span className="label">Psikolog</span>
                    <span className="value">{myDoctor}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <small className="hint-text">
                Durumu değiştirmek için çift tıklayın
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
