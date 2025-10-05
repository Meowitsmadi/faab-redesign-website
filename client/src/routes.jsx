import App from "./components/App";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Schedule from "./components/pages/Schedule";
import Contact from "./components/pages/Contact";
import BlogArchive from "./components/pages/BlogArchive";
import Members from "./components/pages/Members"; 

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
            { path: "/members", element: <Members /> },
            // BELOW IS PLACEHOLDER. NOT SURE IF WE'RE COMBINING PICS + VIDS
            // { path: "/gallery", element: <Gallery /> }, 
        ],
    }
];

export default routes;