import { RiMentalHealthLine } from "react-icons/ri";
import { FaCopy, FaCheck, FaTag } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { patients, setPatients, handleSearch, search, resetHome } =
    useAppContext();
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Form submit'i engelle
  };

  const handleSearchClick = (e) => {
    e.preventDefault(); // Buton tıklamasında form submit'i engelle
  };

  const handleCopyCode = () => {
    const code = "MEPHAS500";
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="head container-fluid ">
      <div className="promo-banner">
        <div className="promo-content">
          <FaTag className="promo-icon" />
          <span className="promo-text">
            Daha iyi hissetme yolculuğunuzda ilk adımınıza özel{" "}
            <span className="discount-amount">500 TL</span> indirim kodu:
          </span>
          <div className="promo-code-container">
            <span className="promo-code">MEPHAS500</span>
            <button
              className="copy-btn"
              onClick={handleCopyCode}
              title={copied ? "Kopyalandı!" : "Kodu Kopyala"}
            >
              {copied ? (
                <FaCheck className="copy-icon" />
              ) : (
                <FaCopy className="copy-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
              }}
              onClick={resetHome}
            >
              <img
                src={logo}
                alt="MEPHAS PSİKOLOJİ Logo"
                style={{ height: "50px", width: "auto", borderRadius: "50%" }}
              />
              <h3 style={{ fontWeight: "700", margin: 0 }}>MEPHAS PSİKOLOJİ</h3>
            </div>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                onChange={handleSearch}
                className="form-control me-2"
                type="search"
                placeholder="Doktor ara..."
                aria-label="Search"
                name="search"
                value={search}
              />
              <div className="my-auto me-2">
                <button
                  className="btn btn-outline-dark rounded-4 "
                  type="submit"
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

//! NOT

// 1. Kullanıcı input'a "Aysa" yazar
// 2. onChange tetiklenir → handleSearch çalışır
// 3. searchValue = "Aysa" olur
// 4. setSearch("Aysa") → search state'i güncellenir
// 5. doctors.filter() → "Aysa" içeren doktorları bulur
// 6. setDoctors(filteredDoctors) → Filtrelenmiş liste state'e kaydedilir
// 7. Doctors component yeniden render olur
// 8. Sadece "Aysa" içeren doktorlar gösterilir
