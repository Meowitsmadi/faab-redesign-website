import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pics/ApostolateLogo.png';

export default function AboutUs(){
  //Set the tab title
  useEffect(() => {document.title = "About Us | FAAB"; }, [])

  return(
    <div className="about container py-4">
      <header className="about-hero py-4 mb-4">
        <h1 className="display-5 fw-semibold mb-2"> About FAAB</h1>
        <h3 className="fst-italic"> Filipino Apostolate of the Archdiocese of Boston</h3>
        <p className="lead text-muted">Who we are, what we value</p>

      </header>

      {/*Mission Statement  */}
      <section className="mb-5 text-start" aria-labelledby="mission">  
        {/* text-start makes the text left-aligned */}
        <h2 id="mission" className="h4 mb-4 text-center">Mission Statement</h2>
        {/* <div className="card border-0 shadow-sm"> */}
          <div className="mx-auto" style={{maxWidth: "850px"}}>
            <p lang="tl" className="fs-5 mb-3 text-justify auto">
            Kami ay isang Sambayanang Kristiyano na gumagabay, kumakalinga, at umaaruga
            sa aming mga kabataan at kapwa Pilipino dito sa Arkidiosesis ng Boston.
            </p>

            <br />

            <p lang="en" className="fs-5 mb-0 text-justify auto">
            We are a Christian Community who guides, takes care, 
            and nourishes the faith life of our young people, 
            and our fellow Filipinos in the Archdiocese of Boston.
            </p>
          </div>
        {/* </div> */}
      </section>

       {/* Logo Explanation */}
        <section className="mb-5" aria-labelledby="logo">
          <div className="mx-auto" style={{ maxWidth: "980px" }}>
            <h2 id="logo" className="h4 mb-4 text-center">Logo Explanation</h2>

            <div className="row g-4 align-items-start">
              {/* Logo */}
              <div className="col-12 col-md-5 text-center">
                <figure className="m-0">
                  <img
                    src={logo}
                    alt="FAAB Apostolate logo"
                    className="img-fluid"
                    style={{ maxWidth: 280, width: "100%", height: "auto",
                            filter: "drop-shadow(0 8px 24px rgba(0,0,0,.08))" }}
                  />
                  <figcaption className="text-muted small mt-2">FAAB logo</figcaption>
                </figure>
              </div>

              {/* Logo Explanation*/}
              <div className="col-12 col-md-7 text-start">
                <ul className="list-unstyled m-0">
                  <li className="mb-3">
                    <strong>The Bamboo Cross — </strong>
                    <span style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                      represents our Christian identity as Asians. Bamboo symbolizes strength and
                      flexibility in trials—resilient by “bending with the wind.”
                    </span>
                  </li>

                  <li className="mb-3">
                    <strong>The Sun with eight rays — </strong>
                    <span style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                      from the Philippine flag, showing our diversity. The rays emanate from Christ
                      at the center—our source, especially in the Holy Eucharist.
                    </span>
                  </li>

                  <li className="mb-3">
                    <strong>The Hands — </strong>
                    <span style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                      reaching out to one another: our desire to serve our kababayan in Greater Boston,
                      expressed in <em>gumagabay, kumakalinga, umaaruga</em>.
                    </span>
                  </li>
                </ul>

                <p className="text-muted small mt-3"
                  style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                  <strong>Concept:</strong> Fr. Alex Castro, AA.
                  <span className="mx-2">•</span>
                  <em>Adapted from the NAFP-USA Triennial Assembly logo (Nov 2017).</em>
                  <span className="mx-2">•</span>
                  <strong>Design:</strong> Rochie Panganiban.
                </p>
              </div>
            </div>
          </div>
        </section>


    </div>
  );

}