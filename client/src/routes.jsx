import App from "./components/App";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Schedule from "./components/pages/Schedule";
import Contact from "./components/pages/Contact";
import BlogArchive from "./components/pages/BlogArchive";
import Login from "./components/pages/Login";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error/>,   
        children: [
            { index: true, element: <Home /> },
            { path: "/about-us", element: <AboutUs /> },
            { path: "/schedule", element: <Schedule /> },
            { path: "/contact", element: <Contact /> },
            { path: "/blog-archive", element: <BlogArchive /> },
            // BELOW IS PLACEHOLDER. NOT SURE IF WE'RE COMBINING PICS + VIDS
            // { path: "/gallery", element: <Gallery /> }, 
            { path: "/login", element: <Login /> },
        ],
    }
];

export default routes;