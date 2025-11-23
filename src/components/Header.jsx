import { RiMentalHealthLine } from "react-icons/ri";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { patients, setPatients, handleSearch, search } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault(); // Form submit'i engelle
  };

  const handleSearchClick = (e) => {
    e.preventDefault(); // Buton tıklamasında form submit'i engelle
  };

  return (
    <div className="head container-fluid ">
      <div>
        <p className=" fs-5 mt-1 text-center">
          Daha iyi hissetme yolculuğunuzda ilk adımınıza özel <b>500 TL</b>{" "}
          indirim kodu: <b>MEPHAS500</b>
        </p>
      </div>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <h3 style={{ fontWeight: "700" }}>
              <span className="fs-1 ms-5 p-3">
                <RiMentalHealthLine />
              </span>
              MEPHAS PSİKOLOJİ
            </h3>
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
