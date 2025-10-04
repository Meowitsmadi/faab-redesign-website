import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App() {
  
  return (
    <>
      <Navbar />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    
    </>
  )
}

export default App
