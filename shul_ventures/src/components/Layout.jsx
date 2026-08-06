import { Outlet } from "react-router";
import TopBar from "./TopBar.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx"

function Layout() {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;