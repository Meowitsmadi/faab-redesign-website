import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pics/ApostolateLogo.png';

export default function Contact(){
  //Set the tab title
  useEffect(() => {document.title = "Contact | FAAB"; }, [])


  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", message: ""
  });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! (wire this to the backend next)");
  };

  // inline style tokens
  const accent = "#052a4e";
  const border = "rgba(189, 168, 155, 1)";

  const styles = {
    section: { padding: "1.5rem 0" },
    brandText: { color: accent, fontStyle: "italic" },
    input: {
      border: `1px solid ${border}`,
      borderRadius: 0,
      background: "#fff"
    },
    textarea: {
      border: `1px solid ${border}`,
      borderRadius: 0,
      background: "#fff",
      minHeight: 140
    },
    button: {
      background: accent,
      border: `1px solid ${accent}`,
      color: "#fff",
      borderRadius: 0,
      padding: "0.5rem 1rem"
    }
  };

  return (
    <div className="container" style={styles.section}>
      {/* header (matches About style) */}
      <header className="text-center py-4 mb-4">
        <h1 className="display-5 fw-semibold mb-2">Contact Us</h1>
        <h3 style={styles.brandText}>Get in Touch</h3>
        <p className="lead text-muted">We would like to hear from you!</p>
      </header>

      {/* 2-column layout */}
      <div className="row g-5 align-items-start">
        {/* left copy */}
        <div className="col-12 col-lg-5">
          <p className="text-muted">
            If you have any inquiries or concerns, please use the contact form.
          </p>
          <div className="small">
            <div className="mb-1">Email</div>
            <a href="mailto:Manpards@gmail.com" className="link-body-emphasis">
              Manpards@gmail.com
            </a>
          </div>
        </div>

        {/* right form */}
        <div className="col-12 col-lg-7">
          <form onSubmit={onSubmit} noValidate>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form-control form-control-lg"
                  style={styles.input}
                  value={form.firstName}
                  onChange={onChange}
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="form-control form-control-lg"
                  style={styles.input}
                  value={form.lastName}
                  onChange={onChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="form-control form-control-lg"
                  style={styles.input}
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-control form-control-lg"
                  style={styles.textarea}
                  value={form.message}
                  onChange={onChange}
                />
              </div>

              <div className="col-12 d-flex justify-content-end">
                <button type="submit" className="btn" style={styles.button}>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}