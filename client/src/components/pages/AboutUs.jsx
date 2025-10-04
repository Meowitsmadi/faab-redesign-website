import { useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs(){
  //Set the tab title
  useEffect(() => {document.title = "About Us | FAAB"; }, [])

  return(
    <div className="about container py-4">
      <header className="about-hero py-4 mb-4">
        <h1 className="display-5 fw-semibold mb-2"> About FAAB</h1>
        <h3 className="fst-italic"> Filipino Archdiocese of Boston</h3>
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
    </div>
  );

}