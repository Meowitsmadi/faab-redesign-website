import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import { usePosts } from "../hooks/FetchPosts";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ShopContext from './ShopContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ShopContext.Provider value={{ posts }}>
        <Navbar />
        <div className="page">
          <Outlet />
        </div>
        <Footer />
      </ShopContext.Provider>
    </>
  )
}

export default App;
