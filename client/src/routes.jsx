import App from "./components/App";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Schedule from "./components/pages/Schedule";
// import ContactUs from "./components/ContactUs";
import BlogArchive from "./components/pages/BlogArchive";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error/>,   
        children: [
            { index: true, element: <Home /> },
            { path: "/about-us", element: <AboutUs /> },
            { path: "/schedule", element: <Schedule /> },
            // { path: "/contact-us", element: <ContactUs /> },
            { path: "/blog-archive", element: <BlogArchive /> },
            // BELOW IS PLACEHOLDER. NOT SURE IF WE'RE COMBINING PICS + VIDS
            // { path: "/gallery", element: <Gallery /> }, 
        ],
    }
];

export default routes;