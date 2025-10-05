import { Link } from "react-router-dom";
import logo from "../assets/pics/ApostolateLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light position-sticky top-0 z-index-9999" style={{ backgroundColor: "white" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="FAAB logo"
            style={{ height: 40, width: "auto", objectFit: "contain" }}
            className="img-fluid"
          />
          <span className="fw-semibold d-none d-sm-inline fs-6 fst-italic">
            Filipino Apostolate of the Archdiocese of Boston
          </span>
        </Link>

        {/* Toggler button aligned right */}
        <button
          className="navbar-toggler order-lg-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links, collapse on small screens, aligned right */}
        <div className="collapse navbar-collapse justify-content-end order-lg-2" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog-archive">
                Blog Archive
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/members">
                Members
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}