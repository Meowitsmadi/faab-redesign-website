import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pics/ApostolateLogo.png';

export default function Contact(){
  //Set the tab title
  useEffect(() => {document.title = "Contact | FAAB"; }, [])

  return(
     <div className="about container py-4">
      <header className="about-hero py-4 mb-4">
        <h1 className="display-5 fw-semibold mb-2"> Contact Us</h1>
        <h3 className="fst-italic"> Get in Touch</h3>
        <p className="lead text-muted">We would like to hear from you!</p>
      </header>
    </div>
  );

}