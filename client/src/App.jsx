import './App.css'
import { Routes, Route, Router} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
function App() {
  
  return (
    <>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      
    
    </>
  )
}

export default App
