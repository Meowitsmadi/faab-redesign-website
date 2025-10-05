// client/src/components/pages/Home.jsx
import { useEffect, useState } from "react";
import Posts from "../Posts";
import CreatePostForm from "../CreatePostForm.jsx";
import heroImg from "../../assets/pics/hero-banner.jpg";
import "../../styles/App.css";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setIsAdmin(true);
  }, []);

  return (
    <main>
      {/* Hero / Banner */}
      <section className="hero">
        <img
          className="hero-img"
          src={heroImg}
          alt="Filipino Apostolate of the Archdiocese of Boston group"
        />
        <div className="hero-overlay">
          <div className="container">
            <h1>Filipino Apostolate of the Archdiocese of Boston</h1>
            <p className="tagline">Gumagabay, Kumakalinga, Umaaruga</p>
            {/* Removed yellow button and other CTAs */}
          </div>
        </div>
      </section>

      {/* Blog and admin posts area */}
      <section className="container" style={{ padding: "48px 0" }}>
        {isAdmin && <CreatePostForm />}
        <Posts />
      </section>
    </main>
  );
}
