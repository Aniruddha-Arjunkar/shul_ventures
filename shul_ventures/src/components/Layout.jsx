import { Outlet } from "react-router";

import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout(){
    return (
       <>
         <TopBar />
         <NavBar />
         <main>
            <Outlet />
         </main>
         <Footer />
       </>
    )
}
export default Layout