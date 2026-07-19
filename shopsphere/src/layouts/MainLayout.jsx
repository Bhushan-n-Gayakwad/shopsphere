import { Outlet } from "react-router";
// import Header from "../components/layout/Header/Header";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


const MainLayout = () => {
    return (
        <>
            <Header/>

            {/* Outlet is where child pages will render. */}
            <Outlet/>  

            <Footer/>
        </>
    )
}

export default MainLayout   