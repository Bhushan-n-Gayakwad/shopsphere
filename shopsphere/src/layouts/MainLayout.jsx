import { Outlet } from "react-router";
import Header from "../components/layout/Header/Header";


const MainLayout = () => {
    return (
        <>
            <Header/>

            {/* Outlet is where child pages will render. */}
            <Outlet/>  

            <h2>Footer</h2>
        </>
    )
}

export default MainLayout