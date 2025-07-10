import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from 'react-router-dom'

export default function Layout(){
    return(
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow">
                <Outlet /> 
            </main>
            <Footer />
        </div>
    );
}