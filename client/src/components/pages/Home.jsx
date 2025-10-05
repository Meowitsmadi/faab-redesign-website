import { useEffect, useState } from 'react';
import Posts from '../Posts';
import CreatePostForm from '../CreatePostForm.jsx';
import homeImg from '../../assets/pics/banner.png';
import "../../styles/App.css";

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setIsAdmin(true);
    document.title = "Home | FAAB";
  }, []);

  // Inline styles (full-bleed hero + readable overlay)
  const styles = {
    breakout: {
      width: "100vw",
      marginLeft: "calc(50% - 50vw)",
      marginRight: "calc(50% - 50vw)",
    },
    hero: {
      position: "relative",
      minHeight: "60vh",
      overflow: "hidden",
    },
    heroImg: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 35%",
      display: "block",
    },
    overlay: {
      position: "relative",
      zIndex: 1,
      minHeight: "inherit",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      textAlign: "center",
      padding: "4rem 1rem 2.75rem",
      color: "#fff",
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 70%)",
    },
    inner: {
      width: "100%",
      maxWidth: 1100,
      margin: "0 auto",
    },
    title: {
      margin: "0 0 .5rem",
      fontWeight: 700,
      lineHeight: 1.08,
      fontSize: "clamp(28px, 4vw, 56px)",
      textShadow: "0 2px 6px rgba(0,0,0,.35)",
    },
    tagline: {
      margin: "0 0 12rem",
      fontSize: "clamp(14px, 1.8vw, 20px)",
      opacity: 0.95,
      textShadow: "0 1px 3px rgba(0,0,0,.35)",
    },
  };

  return (
    <main>
      {/* FULL-BLEED HERO */}
      <section style={{ ...styles.breakout, ...styles.hero }}>
        <img
          src={homeImg}
          alt="Filipino Apostolate of the Archdiocese of Boston group"
          style={styles.heroImg}
        />
        <div style={styles.overlay}>
          <div style={styles.inner}>
            <h1 style={styles.title}>
              Filipino Apostolate of the Archdiocese of Boston
            </h1>
            <p style={styles.tagline}>Gumagabay, Kumakalinga, Umaaruga</p>
            {/* Optional CTAs */}
            {/* <div>
              <a href="#schedule" style={{marginRight: 8}} className="btn btn-primary">See Mass Schedule</a>
              <a href="#events" className="btn btn-outline-light">Upcoming Events</a>
            </div> */}
          </div>
        </div>
      </section>

      {/* POSTS AREA */}
      <div style={{ width: "min(1100px, 100%)", margin: "32px auto", padding: "0 16px" }}>
        {isAdmin && <CreatePostForm />}
        <Posts />
      </div>
    </main>
  );
};

export default Home