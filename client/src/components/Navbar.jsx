import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        {/* TODO: logo placeholder*/}
        <div className="navbar-brand" style={{ width: '120px', height: '40px', backgroundColor: '#ddd' }}>
          Logo 
        </div>

        {/* Toggler button aligned right */}
        <button
          className="navbar-toggler order-lg-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links, collapse on small screens, aligned right */}
        <div className="collapse navbar-collapse justify-content-end order-lg-2" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">Schedule</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog-archive">Blog Archive</Link>
            </li>
            {/* TODO: gallery placeholder. not sure if we're combining or keeping pics/vids split */}
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
