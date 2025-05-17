import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location?.pathname.includes('login') || location.pathname.includes('sign-up')
    return (
        <div className="container mx-auto">
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;